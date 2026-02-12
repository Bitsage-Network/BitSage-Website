# BitSage Website DNS Update - February 11, 2026

## Actions Completed

### 1. Route 53 DNS Records Updated

| Record Type | Name | Value | Purpose |
|-------------|------|-------|---------|
| **A** | `bitsage.network` | `216.198.79.1` | Main website (new Vercel IP) |
| **CNAME** | `www.bitsage.network` | `edee7635fe666d3c.vercel-dns-017.com` | WWW subdomain |
| **TXT** | `_vercel.bitsage.network` | `vc-domain-verify=bitsage.network.8O67f2ec355a5af46a5f` | Vercel verification |
| **TXT** | `_vercel.www.bitsage.network` | `vc-domain-verify=www.bitsage.network.e2bcae361ce60fb64c77` | Vercel www verification |

### 2. Old Project Removed
- Deleted old `bitsage-website` project from `bit-sage-network` team
- Removed old domain associations

### 3. New Website Deployed
- **Team**: `cirolabs`
- **Project**: `bitsage-website`
- **Next.js Version**: 16.1.6 (security vulnerability fixed)
- **Build Status**: ✅ Successful
- **Production URL**: https://bitsage-website-a0n5bm21e-cirolabs.vercel.app

---

## Next Steps

### In Vercel Dashboard

1. Go to: https://vercel.com/cirolabs/bitsage-website/settings/domains
2. You should see both domains with "Verification Needed" status
3. Click the **"Refresh"** button next to `bitsage.network`
4. Click the **"Refresh"** button next to `www.bitsage.network`
5. Vercel will detect the TXT records and verify ownership
6. SSL certificates will be auto-issued (1-2 minutes)
7. Domains will show as "Active" with green checkmarks

---

## Verification Commands

After Vercel activates the domains:

```bash
# Check DNS resolution
dig A bitsage.network +short
# Should return: 216.198.79.1

dig CNAME www.bitsage.network +short
# Should return: edee7635fe666d3c.vercel-dns-017.com.

# Check TXT verification records
dig TXT _vercel.bitsage.network +short
# Should return: "vc-domain-verify=bitsage.network.8O67f2ec355a5af46a5f"

# Test HTTPS
curl -I https://bitsage.network
# Should return: HTTP/2 200 (or 307 redirect to www)

curl -I https://www.bitsage.network
# Should return: HTTP/2 200

# Check SSL certificate
openssl s_client -connect bitsage.network:443 -servername bitsage.network < /dev/null 2>/dev/null | openssl x509 -noout -subject -dates
```

---

## Expected Timeline

| Step | Time | Status |
|------|------|--------|
| DNS record updates | Instant | ✅ Complete |
| DNS propagation | 1-5 minutes | ✅ Already propagated |
| Vercel domain verification | Manual refresh | ⏳ Waiting for you |
| SSL certificate issuance | 1-2 minutes | ⏳ After verification |
| Website live | Total: 5 minutes | ⏳ After SSL |

---

## Troubleshooting

### If Vercel doesn't verify after refreshing:

```bash
# Double-check TXT records are visible
dig TXT _vercel.bitsage.network @8.8.8.8 +short
dig TXT _vercel.www.bitsage.network @8.8.8.8 +short
```

### If website doesn't load after verification:

```bash
# Check if DNS is resolving correctly
nslookup bitsage.network
nslookup www.bitsage.network

# Check global DNS propagation
# Visit: https://www.whatsmydns.net/#A/bitsage.network
```

### If you see old website:

```bash
# Clear browser cache
# Or test in incognito mode
curl -s https://bitsage.network | grep -o '<title>[^<]*' | sed 's/<title>//'
```

---

## Rollback Plan

If needed, revert to old configuration:

```bash
export HOSTED_ZONE_ID="Z09905932X5CPNOC74I0L"

# Revert A record to old IP
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

# Revert www CNAME
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

## Current DNS Configuration (All Records)

```
bitsage.network                    A       216.198.79.1 (NEW)
www.bitsage.network                CNAME   edee7635fe666d3c.vercel-dns-017.com (NEW)
app.bitsage.network                CNAME   cname.vercel-dns.com
docs.bitsage.network               CNAME   cname.vercel-dns.com
api.bitsage.network                A       AWS ALB (us-west-2)
api-sepolia.bitsage.network        A       AWS ALB (us-west-2)
coordinator.bitsage.network        A       AWS ALB (us-west-2)
coordinator-sepolia.bitsage.network A      AWS ALB (us-west-2)
dashboard.bitsage.network          A       AWS ALB (us-west-2)
dashboard-sepolia.bitsage.network  A       AWS ALB (us-west-2)
faucet.bitsage.network             A       AWS ALB (us-west-2)
_vercel.bitsage.network            TXT     "vc-domain-verify=..." (NEW)
_vercel.www.bitsage.network        TXT     "vc-domain-verify=..." (NEW)
```

---

## Contact

If you need help:
- **Vercel Support**: https://vercel.com/support
- **AWS Route 53 Docs**: https://docs.aws.amazon.com/route53

---

*Last updated: February 11, 2026 - 1:30 PM PST*
