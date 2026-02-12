# Fixing Redirect Loop - bitsage.network

**Current Issue**: Redirect loop between bitsage.network ↔ www.bitsage.network

**Cause**:
- `bitsage.network` is redirecting to `www.bitsage.network`
- `www.bitsage.network` is redirecting back to `bitsage.network`
- This creates an infinite loop

---

## Quick Fix (Do this in Vercel Dashboard)

### Option 1: Remove www redirect (Fastest)

1. Go to: https://vercel.com/cirolabs/bitsage-website/settings/domains
2. Find `www.bitsage.network`
3. Click the **⋯** menu → **Remove**
4. Keep only `bitsage.network` active
5. Site will load at https://bitsage.network

✅ **Result**: Site works immediately, no www subdomain

---

### Option 2: Fix redirect settings (Proper setup)

1. Go to: https://vercel.com/cirolabs/bitsage-website/settings/domains

2. **For bitsage.network**:
   - Click **Edit** or the **⋯** menu
   - Set **Git Branch**: `Production` or `main`
   - **Redirect**: Should be OFF or set to "None"
   - Save

3. **For www.bitsage.network**:
   - First click **"Refresh"** to verify TXT record
   - Once verified, click **Edit**
   - Set **Redirect to**: `bitsage.network`
   - Or set **Git Branch**: Same as bitsage.network
   - Save

✅ **Result**:
- https://bitsage.network → loads site ✅
- https://www.bitsage.network → redirects to bitsage.network (301) ✅

---

## Verifying DNS Records

All DNS records are correct:

```bash
# Check apex domain
dig A bitsage.network +short
# Should return: 216.198.79.1

# Check www subdomain
dig CNAME www.bitsage.network +short
# Should return: edee7635fe666d3c.vercel-dns-017.com.

# Check verification TXT
dig TXT _vercel.bitsage.network +short
# Should return: "vc-domain-verify=bitsage.network,8067f2ec355a5af46a5f"

dig TXT _vercel.www.bitsage.network +short
# Should return: "vc-domain-verify=www.bitsage.network,e2bcae361ce60fb64c77"
```

✅ All DNS records are correct - issue is purely Vercel configuration

---

## Expected Behavior After Fix

### Correct Setup:
```
https://bitsage.network         → Website loads (200 OK)
https://www.bitsage.network     → Redirects to bitsage.network (307/301)
http://bitsage.network          → Redirects to https://bitsage.network (SSL)
http://www.bitsage.network      → Redirects to https://bitsage.network (SSL + apex)
```

---

## If Still Not Working After Dashboard Fix

### Clear Browser Cache:
```bash
# In Chrome/Brave
Cmd+Shift+Delete → Clear cache

# Or test in Incognito mode
Cmd+Shift+N
```

### Test with curl:
```bash
# Should return 200 OK and HTML
curl -L https://bitsage.network

# Should show single redirect
curl -sI https://www.bitsage.network | grep location
```

---

## Recommended Vercel Domain Settings

### Primary Domain (bitsage.network):
- **Git Branch**: `main` or `Production`
- **Redirect**: None/Off
- **Environment**: Production
- **SSL**: Automatic (Vercel-managed)

### WWW Subdomain (www.bitsage.network):
- **Redirect to**: `bitsage.network`
- **Type**: Permanent (301)
- **Include Path**: Yes

This ensures:
- Main site loads at apex domain (bitsage.network)
- WWW redirects cleanly to apex
- No redirect loops
- SEO-friendly (single canonical URL)

---

## Alternative: Make WWW Primary

If you prefer www.bitsage.network as primary:

1. **www.bitsage.network**:
   - Git Branch: Production
   - Redirect: None

2. **bitsage.network**:
   - Redirect to: www.bitsage.network
   - Type: 301 Permanent

Then update DNS:
```bash
# Point apex to Vercel
aws route53 change-resource-record-sets \
  --hosted-zone-id Z09905932X5CPNOC74I0L \
  --change-batch '{
    "Changes": [{
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "bitsage.network",
        "Type": "A",
        "TTL": 300,
        "ResourceRecords": [{"Value": "216.198.79.1"}]
      }
    }]
  }'
```

But **I recommend using apex (bitsage.network) as primary** - it's cleaner and more modern.

---

*Last updated: February 11, 2026*
