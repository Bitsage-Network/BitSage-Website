# BitSage Domain Issue - Solution Steps

**Problem**: Vercel shows "This domain is linked to another Vercel account"
**Cause**: Domain was registered with a previous Vercel account/team before it was deleted
**Current Status**: Old project deleted, but Vercel hasn't released the domain claim

---

## Quick Fix Options

### Option 1: Contact Vercel Support (Fastest - 1-2 hours)

1. Go to: https://vercel.com/help
2. Click "Contact Support"
3. Subject: **"Domain transfer - bitsage.network stuck in deleted project"**
4. Message:
   ```
   I deleted an old Vercel project that owned bitsage.network, but when I try to add
   the domain to my new project (cirolabs/bitsage-website), I get an error saying
   "This domain is linked to another Vercel account."

   The domain DNS is already pointing to Vercel (216.198.79.1) with verification TXT
   records in place. Can you please manually release bitsage.network so I can add it
   to my current team (cirolabs)?

   Domain: bitsage.network
   Target project: cirolabs/bitsage-website
   Verification TXT record: _vercel.bitsage.network (already in DNS)
   ```

**Response time**: Usually 1-2 hours

---

### Option 2: Wait for Auto-Release (24-48 hours)

Vercel's system automatically releases domains from deleted projects after 24-48 hours.

**Steps**:
1. Wait 24-48 hours
2. Go to https://vercel.com/cirolabs/bitsage-website/settings/domains
3. Try adding `bitsage.network` again
4. It should work automatically

---

### Option 3: Use Vercel's Automatic Domain (Works Now)

Your site is already live at:
**https://bitsage-website-rose.vercel.app**

You can:
1. Update all links to use this URL temporarily
2. Add a redirect from this URL to bitsage.network later
3. Or just wait for Option 1 or 2 to complete

---

### Option 4: Check if You Have Another Vercel Account

The domain might be registered under a different email/account you used before.

**Check these**:
- Personal email accounts
- Work email accounts
- GitHub-linked Vercel logins
- Google-linked Vercel logins

**If you find it**:
1. Log in to that account
2. Go to the project settings (even if it's deleted, domain might still be there)
3. Remove the domain
4. Switch back to cirolabs account
5. Add the domain to bitsage-website

---

## Current DNS Configuration (Already Correct)

✅ **All DNS records are set up correctly in Route 53**:

```
A       bitsage.network              → 216.198.79.1
CNAME   www.bitsage.network          → edee7635fe666d3c.vercel-dns-017.com
TXT     _vercel.bitsage.network      → vc-domain-verify=bitsage.network.8O67f2ec355a5af46a5f
TXT     _vercel.www.bitsage.network  → vc-domain-verify=www.bitsage.network.e2bcae361ce60fb64c77
```

---

## What Happens After Domain is Released

Once Vercel releases the domain (via support OR auto-release):

1. Go to: https://vercel.com/cirolabs/bitsage-website/settings/domains
2. Click **"Add Domain"**
3. Enter `bitsage.network`
4. Vercel will detect the TXT record automatically
5. Click **"Add"**
6. SSL certificate will be issued in 1-2 minutes
7. Site will be live at https://bitsage.network

---

## Temporary Workaround - Use Subdomain

While waiting, you can use a subdomain that's already working:

```bash
# Add app.bitsage.network to the project
# This should work because it's not claimed by another account
```

Or update `app.bitsage.network` DNS to point to the new deployment:

```bash
aws route53 change-resource-record-sets \
  --hosted-zone-id Z09905932X5CPNOC74I0L \
  --change-batch '{
    "Changes": [{
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "app.bitsage.network",
        "Type": "CNAME",
        "TTL": 300,
        "ResourceRecords": [{"Value": "bitsage-website-rose.vercel.app"}]
      }
    }]
  }'
```

Then add `app.bitsage.network` in Vercel dashboard (this should work since it's not claimed).

---

## Recommended Action

**I recommend Option 1 (Contact Vercel Support)** - it's the fastest way to resolve this.

In the meantime, your new website is accessible at:
- https://bitsage-website-rose.vercel.app
- https://bitsage-website-a0n5bm21e-cirolabs.vercel.app

You can share these URLs or use a subdomain temporarily while waiting for support to release the main domain.

---

## Why This Happened

When you deleted the old `bitsage-website` project under the `bit-sage-network` team:
1. The project was deleted ✅
2. But Vercel kept a "claim" on the domain for security (prevents domain hijacking)
3. This claim expires after 24-48 hours OR can be manually released by support
4. Until released, the domain can't be added to any other project

This is normal Vercel behavior to protect against accidental domain loss.

---

*Last updated: February 11, 2026*
