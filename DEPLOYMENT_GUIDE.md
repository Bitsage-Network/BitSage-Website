# Deploying BitSage Website to bitsage.network

**Current Status**: New website deployed to Vercel but not yet connected to custom domain
**Deployment URL**: https://bitsage-website-a0n5bm21e-cirolabs.vercel.app
**Target Domain**: bitsage.network
**Date**: February 11, 2026

---

## Current Situation

✅ **Website built successfully** with Next.js 16.1.6 (security vulnerability fixed)
✅ **Deployed to Vercel** under `cirolabs` team
❌ **Domain not connected** - `bitsage.network` is registered with a different Vercel project

---

## Option 1: Update Domain Through Vercel Dashboard (Recommended)

### Step 1: Find the Old Project

1. Go to https://vercel.com/dashboard
2. Check **all teams/accounts** you have access to
3. Search for projects containing "bitsage" or "BitSage"
4. Look for the project that currently owns `bitsage.network`

### Step 2: Remove Domain from Old Project

1. Go to the old project → **Settings** → **Domains**
2. Find `bitsage.network` and `www.bitsage.network`
3. Click the **⋯** menu → **Remove**
4. Confirm removal

### Step 3: Add Domain to New Project

1. Go to https://vercel.com/cirolabs/bitsage-website
2. Go to **Settings** → **Domains**
3. Click **Add Domain**
4. Enter `bitsage.network`
5. Click **Add**
6. Vercel will auto-detect your Route 53 DNS configuration
7. Repeat for `www.bitsage.network` (it will redirect to the main domain)

### Step 4: Verify SSL

Wait 1-2 minutes for Vercel to issue SSL certificates, then:

```bash
curl -I https://bitsage.network
# Should return 200 OK with valid SSL
```

---

## Option 2: Transfer Project to Different Team

If the domain is under a different team and you want to consolidate:

1. Go to the old project → **Settings** → **General**
2. Scroll to **Transfer Project**
3. Transfer to the team where you want the new deployment
4. Then add the domain to that team's project

---

## Option 3: Use Vercel CLI to Switch Teams

If the domain is under a different Vercel account/team:

```bash
# List all teams you have access to
vercel teams ls

# Switch to the team that owns bitsage.network
vercel switch <team-name>

# Now try adding the domain
vercel domains add bitsage.network

# If successful, link the domain to the new project
vercel alias bitsage.network bitsage-website
```

---

## Option 4: Update DNS to Point to New Deployment

If you can't remove the domain from the old project, update DNS:

### Get New Vercel Deployment IP

```bash
# Vercel typically uses these IPs
# 76.76.21.21
# 76.76.21.22
# Or you can use CNAME: cname.vercel-dns.com
```

### Update Route 53 A Record

```bash
export HOSTED_ZONE_ID="Z09905932X5CPNOC74I0L"

# Update root domain A record
aws route53 change-resource-record-sets \
  --hosted-zone-id $HOSTED_ZONE_ID \
  --change-batch '{
    "Changes": [{
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "bitsage.network",
        "Type": "A",
        "TTL": 300,
        "ResourceRecords": [{"Value": "76.76.21.21"}]
      }
    }]
  }'

# Update www CNAME
aws route53 change-resource-record-sets \
  --hosted-zone-id $HOSTED_ZONE_ID \
  --change-batch '{
    "Changes": [{
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "www.bitsage.network",
        "Type": "CNAME",
        "TTL": 300,
        "ResourceRecords": [{"Value": "cname.vercel-dns.com"}]
      }
    }]
  }'
```

---

## Verification Steps

After connecting the domain:

### 1. Check DNS Resolution

```bash
dig A bitsage.network +short
# Should show 76.76.21.21 or similar

dig CNAME www.bitsage.network +short
# Should show cname.vercel-dns.com
```

### 2. Check Website Loads

```bash
curl -I https://bitsage.network
# Should return 200 OK

curl -s https://bitsage.network | grep -o '<title>[^<]*' | sed 's/<title>//'
# Should show your new website title
```

### 3. Check SSL Certificate

```bash
openssl s_client -connect bitsage.network:443 -servername bitsage.network < /dev/null 2>/dev/null | openssl x509 -noout -dates -subject
# Should show valid Vercel SSL certificate
```

### 4. Test All Subdomains

```bash
curl -I https://www.bitsage.network
curl -I https://app.bitsage.network
curl -I https://docs.bitsage.network
```

---

## Current DNS Configuration (Route 53)

Your DNS is already configured correctly:

| Domain | Type | Current Value | Status |
|--------|------|---------------|--------|
| `bitsage.network` | A | `76.76.21.21` | ✅ Points to Vercel |
| `www.bitsage.network` | CNAME | `cname.vercel-dns.com` | ✅ Points to Vercel |
| `app.bitsage.network` | CNAME | `cname.vercel-dns.com` | ✅ Points to Vercel |
| `docs.bitsage.network` | CNAME | `cname.vercel-dns.com` | ✅ Points to Vercel |

**The issue is NOT DNS** - DNS is correct. The issue is that the Vercel project needs to be updated to serve the new website.

---

## Quick Fix: Manual Deployment via Vercel Dashboard

If you can't resolve the CLI/domain issue:

1. **Delete** the old BitSage project (or archive it)
2. **Create new project** from the Vercel dashboard:
   - Go to https://vercel.com/new
   - Select **Import Git Repository**
   - Choose `Bitsage-Network/BitSage-WebApp` (or your repo)
   - Framework Preset: **Next.js**
   - Root Directory: `./` (or specify if in a subdirectory)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
3. **Add domain** `bitsage.network` in project settings
4. **Deploy**

---

## Rollback Plan

If the new website has issues:

### Revert DNS to Old Deployment

```bash
# If you know the old Vercel deployment URL or IP
aws route53 change-resource-record-sets \
  --hosted-zone-id Z09905932X5CPNOC74I0L \
  --change-batch '{
    "Changes": [{
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "bitsage.network",
        "Type": "A",
        "TTL": 300,
        "ResourceRecords": [{"Value": "OLD_IP_HERE"}]
      }
    }]
  }'
```

---

## Next Steps

**Immediate Action Required**:

1. **Log in to Vercel Dashboard**: https://vercel.com/dashboard
2. **Find all teams** you have access to (top-left dropdown)
3. **Locate the project** that currently owns `bitsage.network`
4. **Remove the domain** from that project
5. **Add the domain** to the new `bitsage-website` project under `cirolabs`
6. **Test the website** at https://bitsage.network

**Expected Timeline**:
- Domain removal: Instant
- Domain addition: 1-2 minutes
- DNS propagation: Already done (your DNS is correct)
- SSL certificate: 1-2 minutes (Vercel auto-issues)
- Total: ~5 minutes

---

## Support

- **Vercel Domains Documentation**: https://vercel.com/docs/projects/domains
- **Vercel Support**: https://vercel.com/support
- **AWS Route 53 Guide**: `/Users/vaamx/bitsage-network/specs/guides/AWS_DNS_MANAGEMENT.md`

---

## Summary

**What's working**:
✅ New website built and deployed to Vercel
✅ DNS correctly pointing to Vercel
✅ Next.js 16.1.6 (security vulnerability fixed)
✅ SSL ready to be issued by Vercel

**What needs to be done**:
❌ Remove `bitsage.network` from old Vercel project
❌ Add `bitsage.network` to new Vercel project `cirolabs/bitsage-website`

**Action**: Use Vercel Dashboard to manage domains (fastest method)

---

*Last updated: February 11, 2026*
