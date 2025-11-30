# Magical Icons for BitSage Megamenu

These icons were generated using **Flux API** to create a consistent, magical, mysterious aesthetic that matches the BitSage brand.

## 📦 Generated Icons (21 Total)

**Platform > Explore:**
- `gpu-marketplace.png` - Mystical glowing diamond crystal
- `live-projects.png` - Lightning bolt made of cyan energy  
- `pricing.png` - Golden coin with magical glow
- `whitepaper.png` - Glowing holographic scroll with runes
- `about-bitsage.png` - Information symbol made of glowing crystal

**Platform > Products:**
- `render-api.png` - Mystical movie clapperboard/camera
- `compute-api.png` - Lightning bolt merged with circuit board
- `batch-processing.png` - Mystical glowing box with energy streams
- `sage-assistants.png` - Magical wizard hat/sage figure

**Platform > Developers:**
- `api-reference.png` - Mystical wrench made of crystal energy
- `sdk-cli.png` - Glowing gear with circuit patterns

**Participate > For Creators:**
- `artists.png` - Mystical theater mask/palette with magical paint
- `ai-builders.png` - Futuristic robot/AI brain with cyan circuitry
- `game-developers.png` - Mystical game controller with glowing buttons
- `agencies.png` - Glowing futuristic office building

**Participate > For Providers:**
- `node-operators.png` - Mystical server node with data streams
- `gpu-providers.png` - Magical graphics card with circuit patterns
- `enterprise-hosts.png` - Mystical data center with crystalline structures

**Participate > For Token Holders:**
- `sage-staking.png` - Glowing magical coins/treasure chest
- `governance.png` - Mystical voting ballot with ethereal symbols
- `get-sage.png` - Magical cryptocurrency coin with SAGE symbol

## 🎨 Design Style

- **Theme**: Mystical, ethereal, sci-fi
- **Colors**: Cyan, blue, with magical glows
- **Format**: PNG with transparent backgrounds
- **Size**: 512x512px (optimized for web)
- **Aesthetic**: Cosmic, mysterious, technological magic

## 🔄 Regenerating Icons

To regenerate all icons or add new ones:

```bash
cd BitSage-WebApp
node scripts/generate-icons.js
```

## ➕ Adding New Icons

1. Edit `scripts/generate-icons.js`
2. Add a new icon definition to the `icons` array:
   ```javascript
   {
     name: 'my-new-icon',
     prompt: 'A detailed description of the icon with magical cyan glow, ethereal particles, cosmic background, transparent background, icon design, 4k, minimal design',
   }
   ```
3. Run the generation script
4. Add `iconName: 'my-new-icon'` to the menu item in `Navigation.tsx`

## 🔑 API Key

Flux API key is stored in the generation script. 

## 📝 Prompt Template

For consistency, use this template for new icons:

```
A [object/concept] made of glowing cyan [energy/crystal], 
with [magical/ethereal] particles [surrounding/flowing through] it, 
cosmic background with [stars/sparkles], 
transparent background, icon design, 
[adjectives describing mood] aesthetic, 4k, clean minimal design
```

## 💡 Tips

- Keep prompts focused on cyan/blue magical theme
- Always include "transparent background, icon design"
- Add "4k, clean minimal design" for best results
- Use words like "ethereal", "mystical", "cosmic", "magical"
- Icons work with fallback emojis if they fail to load

