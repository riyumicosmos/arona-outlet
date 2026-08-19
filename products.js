const products = [
  {
    name: "888 TOTAL WHITE WHITENING SOAP",
    price: "2 OMR",
    page: "SKINCARE.html#888-totalsoap",
    section: "SOAP"
  },
  {
    name: "NIACINAMIDE TAWAS SOAP",
    price: "1.2 OMR",
    page: "SKINCARE.html#niacinamide-tawassoap",
    section: "SOAP"
  },
  {
    name: "SNAIL BRIGHT",
    price: "1.5 OMR",
    page: "SKINCARE.html#snail-bright",
    section: "SOAP"
  },
  {
    name: "DAILY GLOW: WATERMELON SOAP",
    price: "3.5 OMR",
    page: "SKINCARE.html#daily-glow-watermelonsoap",
    section: "SOAP"
  },
  {
    name: "COWJIC NIACINAMIDE SOAP",
    price: "3.7 OMR",
    page: "SKINCARE.html#cowjic-niacinamidesoap",
    section: "SOAP"
  },
  {
    name: "BEAUTY WHITE SOAP",
    price: "3.5 OMR",
    page: "SKINCARE.html#beauty-white-soap",
    section: "SOAP"
  },
  {
    name: "KOJIC PAPAYA HONEY OATMEAL SOAP",
    price: "1 OMR",
    page: "SKINCARE.html#kojic-papayahoney-oatmealsoap",
    section: "SOAP"
  },
  {
    name: "KAGAYAKU VANILLA",
    price: "1 OMR",
    page: "SKINCARE.html#kagayaku-vanilla",
    section: "SOAP"
  },
  {
    name: "ROSMAR KOJICKU EXTREME EXFOLIATING SOAP",
    price: "1 OMR",
    page: "SKINCARE.html#rosmar-kojicku-extreme-exfoliatingsoap",
    section: "SOAP"
  },
  {
    name: "GLUTA PAPAYA SOAP",
    price: "1 OMR",
    page: "SKINCARE.html#gluta-papaya-soap",
    section: "SOAP"
  },
  {
    name: "BMR'S NIACINAMIDE PREMIUM WHITENING SOAP",
    price: "800 BAIZA",
    page: "SKINCARE.html#bmr's-niacinamide-premium-whiteningsoap",
    section: "SOAP"
  },
  {
    name: "GLUTA BERRY BLEACHING SOAP",
    price: "1.5 OMR",
    page: "SKINCARE.html#gluta-berry-bleachingsoap",
    section: "SOAP"
  },
  {
    name: "KOJIC+ PAPAYA SOAP",
    price: "1.8 OMR",
    page: "SKINCARE.html#kojic-papaya-soap",
    section: "SOAP"
  },
  {
    name: "BAR DAKS SOAP",
    price: "1.5 OMR",
    page: "SKINCARE.html#bar-daks-soap",
    section: "SOAP"
  },
  {
    name: "KOJIE SAN SKIN LIGHTENING SOAP",
    price: "1 OMR",
    page: "SKINCARE.html#kojiesan-skinlightening-soap",
    section: "SOAP"
  },
  {
    name: "KOJIE SAN VALUE PACK",
    price: "2 OMR",
    page: "SKINCARE.html#kojiesan-valuepack",
    section: "SOAP"
  },
  {
    name: "ULTRA WHITE KOJI SOAP",
    price: "1 OMR",
    page: "SKINCARE.html#ultrawhite-kojisoap",
    section: "SOAP"
  },
  {
    name: "HONEST GLOW PAPAYA KOJIC SOAP",
    price: "1 OMR",
    page: "SKINCARE.html#honestglow-papaya-kojicsoap",
    section: "SOAP"
  },
  {
    name: "HABIBI BABAD SOAP",
    price: "2.5 OMR",
    page: "SKINCARE.html#habibi-babadsoap",
    section: "SOAP"
  },
  {
    name: "GOREE WHITENING SOAP",
    price: "1.5 OMR",
    page: "SKINCARE.html#goree-whitening-soap",
    section: "SOAP"
  },
  {
    name: "INTENSIVE BLEACHING BAR",
    price: "1.5 OMR",
    page: "SKINCARE.html#intensive-bleaching-bar",
    section: "SOAP"
  },
  {
    name: "A BONNE SEXY ESSENCE LOTION",
    price: "4.5 OMR",
    page: "SKINCARE.html#abonnesexy-essence-lotion",
    section: "LOTION"
  },
  {
    name: "888 TOTAL WHITE WHITENING LOTION",
    price: "4 OMR",
    page: "SKINCARE.html#888-totalwhite-whitening-lotion",
    section: "LOTION"
  },
  {
    name: "SAKURA NIACINAMIDE BODY LOTION",
    price: "4.5 OMR",
    page: "SKINCARE.html#sakura-niacinamide-bodylotion",
    section: "LOTION"
  },
  {
    name: "SCD PEELING SKIN LOTION",
    price: "3.5 OMR",
    page: "SKINCARE.html#scd-peelingskin-lotion",
    section: "LOTION"
  },
  {
    name: "PAGODA COLD WAVE LOTION",
    price: "3 OMR",
    page: "SKINCARE.html#pagoda-coldwave-lotion",
    section: "LOTION"
  },
{
    name: "SHAWILL SPF35 NIACINAMIDE WHITENING BODY LOTION",
    price: "3.5 OMR",
    page: "SKINCARE.html#shawillspf35-niacinamide-whitening-bodylotion",
    section: "LOTION"
  },
  {
    name: "LUXE ORGANIX MILK+GLUTA WHITENING SERUM LOTION",
    price: "4 OMR",
    page: "SKINCARE.html#luxeorganix-milk+gluta-whiteningserum-lotion",
    section: "LOTION"
  },
  {
    name: "LUXE ORGANIX RETINOL+GLUTA WHITENING SERUM LOTION",
    price: "4 OMR",
    page: "SKINCARE.html#luxeorganix-retinol+gluta-whiteningserum-lotion",
    section: "LOTION"
  },
  {
    name: "LUXE ORGANIX BAKUCHIOL + NIACINAMIDE LOTION",
    price: "4.8 OMR",
    page: "SKINCARE.html#luxeorganix-bakuchiol+niacinamide-lotion",
    section: "LOTION"
  },
  {
    name: "SY GLOW HYDRATING & BRIGHTENING LOTION SPF40",
    price: "3.5 OMR",
    page: "SKINCARE.html#syglow-hydrating&brightening-lotionspf40",
    section: "LOTION"
  },
  {
    name: "AISASEA NIACINAMIDE BODY DOUBLE TUBE WHITENING CREAM",
    price: "1.5 OMR",
    page: "SKINCARE.html#aisasea-niacinamide-bodydoubletube-whitening-cream",
    section: "LOTION"
  },
  {
    name: "SY GLOW SPF80 HAND & BODY LOTION",
    price: "4.5 OMR",
    page: "SKINCARE.html#syglow-spf80-hand&bodylotion",
    section: "LOTION"
  },
  {
    name: "BELO UNDERARM WHITENING CREAM",
    price: "4 OMR",
    page: "SKINCARE.html#belo-underarm-whiteningcream",
    section: "CREAM"
  },
  {
    name: "88 TOTAL WHITE UNDERARM CREAM",
    price: "3.5 OMR",
    page: "SKINCARE.html#88total-white-underarmcream",
    section: "CREAM"
  },
  {
    name: "SEFUDUN VARICOSE VEINS CREAM",
    price: "3.5 OMR",
    page: "SKINCARE.html#sefudun-varicose-veins-cream",
    section: "CREAM"
  },
  {
    name: "KISS BEAUTY SPF90+ SUNSCREEN CREAM",
    price: "2 OMR",
    page: "SKINCARE.html#kissbeauty-spf90+-sunscreencream",
    section: "CREAM"
  },
  {
    name: "PEKAS CREAM",
    price: "3 OMR",
    page: "SKINCARE.html#pekas-cream",
    section: "CREAM"
  },
  {
    name: "PEKAS REMOVER CREAM",
    price: "3 OMR",
    page: "SKINCARE.html#pekas-remover-cream",
    section: "CREAM"
  },
  {
    name: "LS BL CREAM",
    price: "1 OMR",
    page: "SKINCARE.html#ls-bl-cream",
    section: "CREAM"
  },
  {
    name: "SEA BUCKTHORN GLUTA WHITENING LAZY CREAM",
    price: "3.5 OMR",
    page: "SKINCARE.html#sea-buckthorn-glutawhitening-lazycream",
    section: "CREAM"
  },
  {
    name: "MIAOJIA ZUDAIFU",
    price: "2 OMR",
    page: "SKINCARE.html#miaojia-zudaifu",
    section: "CREAM"
  },
  {
    name: "THE ULTIMATE BOTOX WHITENING DAY AND NIGHT CREAM SPF70",
    price: "2.5 OMR",
    page: "SKINCARE.html#theultimate-botoxwhitening-dayandnight-creamspf70",
    section: "CREAM"
  },
  {
    name: "CAPADOSA BOTOX WHITENING DAY AND NIGHT CREAM SPF70",
    price: "2.5 OMR",
    page: "SKINCARE.html#capadosa-botoxwhitening-dayandnight-creamspf70",
    section: "CREAM"
  },
  {
    name: "KASOY CREAM",
    price: "1 OMR",
    page: "SKINCARE.html#kasoy cream",
    section: "CREAM"
  },
  {
    name: "NATURE'S MIRACLE KASOY CREAM",
    price: "1.8 OMR",
    page: "SKINCARE.html#nature's-miracle-kasoycream",
    section: "CREAM"
  },
  {
    name: "PAPAFEEL EYE REPAIR CREAM",
    price: "6.5 OMR",
    page: "SKINCARE.html#papafeel-eyerepair-cream",
    section: "CREAM"
  },
  {
    name: "ANGEL'S SKIN WHITE AS SNOW BLEACHING CREAM",
    price: "5 OMR",
    page: "SKINCARE.html#angelsskin-whiteassnow-bleachingcream",
    section: "CREAM"
  },
  {
    name: "NIACINAMIDE BRIGHTENING CREAM",
    price: "3 OMR",
    page: "SKINCARE.html#niacinamide-brightening-cream",
    section: "CREAM"
  },
  {
    name: "SKIN SENSATION SCAR-MINATOR",
    price: "3 OMR",
    page: "SKINCARE.html#skinsensation-scar-minator",
    section: "CREAM"
  },
  {
    name: "PAPAFEEL 3X RETINOL ANTI-AGING MOISTURIZER",
    price: "6 OMR",
    page: "SKINCARE.html#papafeel-3xretinol-anti-aging-moisturizer",
    section: "CREAM"
  },
  {
    name: "RITUALS MAGIC TOUCH BODY CREAM",
    price: "2.5 OMR",
    page: "SKINCARE.html#rituals-magictouch-bodycream",
    section: "CREAM"
  },
  {
    name: "ORANGE ENZYMES EXFOLIATING BRIGHTENING GEL",
    price: "2.5 OMR",
    page: "SKINCARE.html#orangeenzymes-exfoliating-brightening-gel",
    section: "CREAM"
  },
  {
    name: "MELACARE CREAM",
    price: "2 OMR",
    page: "SKINCARE.html#melacare-cream",
    section: "CREAM"
  },
  {
    name: "SKINLITE CREAM",
    price: "2 OMR",
    page: "SKINCARE.html#skinlite-cream",
    section: "CREAM"
  },
  {
    name: "MANUKA CREAM",
    price: "4 OMR",
    page: "SKINCARE.html#manuka-cream",
    section: "CREAM"
  },
  {
    name: "ABUTINE 3C3",
    price: "6 OMR",
    page: "SKINCARE.html#abutine-3c3",
    section: "CREAM"
  },
{
    name: "ASHLEY SHINE NIACINAMIDE 3 IN 1 DAY CREAM",
    price: "2.5 OMR",
    page: "SKINCARE.html#ashley-shine-niacinamide-3in1day-cream",
    section: "CREAM"
  },
  {
    name: "ASHLEY NIACINAMIDE NIGHT CREAM",
    price: "2.5 OMR",
    page: "SKINCARE.html#ashley-niacinamide-night-cream",
    section: "CREAM"
  },
  {
    name: "GOLDEN PEARL BEAUTY CREAM",
    price: "OMR",
    page: "SKINCARE.html#golden-peal-beauty-cream",
    section: "CREAM"
  },
  {
    name: "AHA BRILLIANT",
    price: "1.8 OMR",
    page: "SKINCARE.html#aha-brilliant",
    section: "SERUM"
  },
  {
    name: "PAPAFEEL 3X RETINOL ANTI-AGING SERUM",
    price: "6 OMR",
    page: "SKINCARE.html#papafeel-3xretinol-anti-aging-serum",
    section: "SERUM"
  },
  {
    name: "SYDUCTION PORE MINIMIZER SERUM",
    price: "3 OMR",
    page: "SKINCARE.html#syduction-pore-minimizer-serum",
    section: "SERUM"
  },
  {
    name: "SADOER NIACINAMIDE WHITEN ANTI-FRECKLE SERUM",
    price: "2.5 OMR",
    page: "SKINCARE.html#sodoer-niacinamide-whiten-anti-freckle-serum",
    section: "SERUM"
  },
  {
    name: "DR.MEINAIER AHA BODY SERUM PLUS VITAMIN C&E",
    price: "3 OMR",
    page: "SKINCARE.html#drmeinaier-aha-bodyserum-plus-vitaminc&e",
    section: "SERUM"
  },
  {
    name: "HYALURONIC ACID PURE SERUM",
    price: "5.5 OMR",
    page: "SKINCARE.html#hyaluronic-acid-pureserum",
    section: "SERUM"
  },
  {
    name: "VENATURE RED PEEL SERUM",
    price: "2.8 OMR",
    page: "SKINCARE.html#venature-redpeel-serum",
    section: "SERUM"
  },
  {
    name: "VENATURE BAKUCHIOL RETINOL",
    price: "2.2 OMR",
    page: "SKINCARE.html#venature-bakuchiol-retinol",
    section: "SERUM"
  },
  {
    name: "LUXE ORGANIX RETINOL RADIANCE",
    price: "6.5 OMR",
    page: "SKINCARE.html#luxeorganix-retinol-radiance",
    section: "SERUM"
  },
  {
    name: "VIBRANT GLAMOUR RETINOL SERUM",
    price: "2.5 OMR",
    page: "SKINCARE.html#vibrant-glamour-retinol-serum",
    section: "SERUM"
  },
  {
    name: "SADOER DRAGON BLOOD ANTI-AGING SERUM",
    price: "2.2 OMR",
    page: "SKINCARE.html#sadoer-dragonblood-anti-aging-serum",
    section: "SERUM"
  },
  {
    name: "BUROKKU PREMIUM SUNSCREEN",
    price: "3 OMR",
    page: "SKINCARE.html#burokku-premium-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "BEAUTY WHITE SUNSCREEN",
    price: "1.5 OMR",
    page: "SKINCARE.html#beauty-white-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "SY GLOW SUNSCREEN",
    price: "3 OMR",
    page: "SKINCARE.html#syglow-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "PERFECTSKIN ALL NATURALS SUNBLOCK GEL CREAM",
    price: "2.5 OMR",
    page: "SKINCARE.html#perfectskin-allnaturals-sunblock-gel-cream",
    section: "SUNSCREEN"
  },
  {
    name: "BEAUTY VAULT TINTED SUNBLOCK CREAM",
    price: "3.5 OMR",
    page: "SKINCARE.html#beautyvault-tinted-sunblockcream",
    section: "SUNSCREEN"
  },
  {
    name: "SUN PERFECT TINTED SUNSCREEN",
    price: "4 OMR",
    page: "SKINCARE.html#sunperfect-tinted-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "SUNKISSED ILLUMINATING SUNSCREEN",
    price: "3.5 OMR",
    page: "SKINCARE.html#sunkissed-illuminating-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "FAIRY SKIN PREMIUM TINTED SUNSCREEN",
    price: "3.5 OMR",
    page: "SKINCARE.html#fairyskin-premium-tinted-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "SY GLOW TRIPLE WHITENING SUNSCREEN",
    price: "3 OMR",
    page: "SKINCARE.html#syglow-triple-whitening-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "POND'S GLUTA-NIACINAMIDE SUNSCREEN",
    price: "4 OMR",
    page: "SKINCARE.html#ponds-gluta-niacinamide-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "BELO SUNEXPERT TINTED SUNSCREEN",
    price: "4 OMR",
    page: "SKINCARE.html#belo-sunexpert-tintedsunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "BRILLIANT SKIN TINTED SUNSCREEN WITH ORGASOL CARESSE",
    price: "3.5 OMR",
    page: "SKINCARE.html#brilliantskin-tintedsunscreen-withorgasolcaresse",
    section: "SUNSCREEN"
  },
  {
    name: "BRILLIANT SKIN SUNSCREEN WITH ORGASOL CARESSE",
    price: "3.5 OMR",
    page: "SKINCARE.html#brilliantskin-sunscreen-withorgasol-caresse",
    section: "SUNSCREEN"
  },
  {
    name: "HIKARI SKIN ESSENTIALS ULTRAFRESH SUNSCREEN",
    price: "2.5 OMR",
    page: "SKINCARE.html#hikari-skinessentials-ultrafresh-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "DR. ALVIN WHITENING SUNSCREEN CREAM-GEL",
    price: "3 OMR",
    page: "SKINCARE.html#dralvin-whitening-sunscreen-creamgel",
    section: "SUNSCREEN"
  },
  {
    name: "MS. TSUNG GLOW MIST SPRAY",
    price: "2 OMR",
    page: "SKINCARE.html#mstsung-glow-mist-spray",
    section: "SUNSCREEN"
  },
  {
    name: "MS. TSUNG SUNBLOCK CREAM  SPF30",
    price: "1.9 OMR",
    page: "SKINCARE.html#mstsung-sunblock-creamspf30",
    section: "SUNSCREEN"
  },
  {
    name: "BIOTIQUE BIO CUCUMBER PORE TIGHTENING TONER WITH HIMALAYAN WATERS",
    price: "3 OMR",
    page: "SKINCARE.html#biotique-bio-cucumber-poretightening-toner",
    section: "TONER"
  },
  {
    name: "BIOTIQUE BIO HONEY WATER PORE TIGHTENING TONER WITH HIMALAYAN WATERS",
    price: "3 OMR",
    page: "SKINCARE.html#biotique-bio-honeywater-poretightening-toner",
    section: "TONER"
  },
  {
    name: "BLEM DR. PEKAS TONER",
    price: "3 OMR",
    page: "SKINCARE.html#blemdr-pekas-toner",
    section: "TONER"
  },
  {
    name: "LUXE ORGANIX MIRACLE SOLUTIONS ACNE DERM TONER",
    price: "5.5 OMR",
    page: "SKINCARE.html#luxeorganix-miraclesolutions-acnederm-toner",
    section: "TONER"
  },
  {
    name: "LUXE ORGANIX WHITENING REPAIR ULTRA LIGHT GLOW TONER",
    price: "5.5 OMR",
    page: "SKINCARE.html#luxeorganix-whitening-repair-ultralightglow-toner",
    section: "TONER"
  },
  {
    name: "TRANSFORMED SKIN HONESTGLOW ALOE ICE TONER",
    price: "2.5 OMR",
    page: "SKINCARE.html#transformedskin-honestglow-aloeice-toner",
    section: "TONER"
  },
  {
    name: "BMR'S NIACINAMIDE TONER",
    price: "2.5 OMR",
    page: "SKINCARE.html#bmrs-niacinamide-toner",
    section: "TONER"
  },
  {
    name: "BONITA HIMALAYAN PINK SALT FACE & BODY OIL",
    price: "3.8 OMR",
    page: "SKINCARE.html#bonita-himalayanpinksalt-face&body-oil",
    section: "OIL"
  },
  {
    name: "PRETTY COWRY ESSENTIAL OIL SKIN OIL",
    price: "1.5 OMR",
    page: "SKINCARE.html#prettycowry-essentialoil-skinoil",
    section: "OIL"
  },
  {
    name: "KASOY OIL",
    price: "1.5 OMR",
    page: "SKINCARE.html#kasoy-oil",
    section: "OIL"
  },
  {
    name: "FAIRY SKIN GLOW BOOSTER CLEANING GEL",
    price: "1.8 OMR",
    page: "SKINCARE.html#fairyskin-glowbooster-cleaning-gel",
    section: "GEL"
  },
  {
    name: "ALPHA ARBUTIN BATH GEL",
    price: "3.8 OMR",
    page: "SKINCARE.html#alpha-arbutin-bath-gel",
    section: "GEL"
  },
  {
    name: "RDL BABYFACE CUCUMBER EXTRACT FACIAL CLEANSER",
    price: "2.6 OMR",
    page: "SKINCARE.html#rdlbabyface-cucumberextract-facialcleanser",
    section: "FACIAL-CLEANSER-WASH"
  },
  {
    name: "RXYSKIN SINCERITY DEEP CLEANSING WATER",
    price: "1.5 OMR",
    page: "SKINCARE.html#rxyskin-sincerity-deepcleansingwater",
    section: "FACIAL-CLEANSER-WASH"
  },
  {
    name: "RDL BABYFACE 1/2/3",
    price: "2.5 OMR",
    page: "SKINCARE.html#rdl-babyface-1/2/3",
    section: "TREATMENT"
  },
  {
    name: "TRETINOIN HYDROQUINONE EXFOLIANT SOLUTION 1/2/3",
    price: "2.5 OMR",
    page: "SKINCARE.html#tretinoin-hydroquinoneexfoliant-solution-1/2/3",
    section: "TREATMENT"
  },
  {
    name: "SKINTIFIC MUGWORT ACNE CLAY STICK",
    price: "5.5 OMR",
    page: "SKINCARE.html#skintific-mugwortacne-claystick",
    section: "TREATMENT"
  },
  {
    name: "LUXE ORGANIX HYDROCOLLOID ACNE PATCH DAY TIME",
    price: "3 OMR",
    page: "SKINCARE.html#luxeorganix-hydrocolloid-acnepatch-daytime",
    section: "TREATMENT"
  },
  {
    name: "LUXE ORGANIX HYDROCOLLOID ACNE PATCH NIGHT TIME",
    price: "3.2 OMR",
    page: "SKINCARE.html#luxeorganix-hydrocolloid-acnepatch-nighttime",
    section: "TREATMENT"
  },
  {
    name: "SY GLOW GLASS SKIN SET",
    price: "4 OMR",
    page: "SKINCARE.html#syglow-glassskin-set",
    section: "FACIAL-SET"
  },
  {
    name: "BRILLIANT SKIN REJUV SET",
    price: "3.8 OMR",
    page: "SKINCARE.html#brilliantskin-rejuv-set",
    section: "FACIAL-SET"
  },
  {
    name: "MADAM KILAY MAMORU REJUVENATING SET",
    price: "4 OMR",
    page: "SKINCARE.html#madamkilay-mamorurejuvenating-set",
    section: "FACIAL-SET"
  },
  {
    name: "DR. ALVIN THE ORIGINAL REJUVINATING SET",
    price: "4 OMR",
    page: "SKINCARE.html#dralvin-theoriginal-rejuvinatingset",
    section: "FACIAL-SET"
  },
   {
    name: "SCD PEELING SET",
    price: "4 OMR",
    page: "SKINCARE.html#scd-peelingset",
    section: "FACIAL-SET"
  },
  {
    name: "PRESTIGE WHITENING FACIAL SET",
    price: "4 OMR",
    page: "SKINCARE.html#prestige-whitening-facialset",
    section: "FACIAL-SET"
  },
  {
    name: "SEVENDAYS POWER EXFOLIATING SET",
    price: "3.5 OMR",
    page: "SKINCARE.html#sevendays-power-exfoliating-set",
    section: "FACIAL-SET"
  },
  {
    name: "PRESTIGE REJUVENATING SET",
    price: "3.8 OMR",
    page: "SKINCARE.html#prestige-rejuvenatingset",
    section: "FACIAL-SET"
  },
  {
    name: "PERFECTSKIN REJUVENATING SET 2",
    price: "3.5 OMR",
    page: "SKINCARE.html#perfectskin-rejuvenatingset2",
    section: "FACIAL-SET"
  },
  {
    name: "PERFECTSKIN WHITENING KIT",
    price: "3.5 OMR",
    page: "SKINCARE.html#perfectskin-whiteningkit",
    section: "FACIAL-SET"
  },
  {
    name: "KAGAYAKU 6 IN 1 HYDRA GLASS SKIN SET",
    price: "3.7 OMR",
    page: "SKINCARE.html#kagayaku6in1-hydra-glassskinset",
    section: "FACIAL-SET"
  },
  {
    name: "ADORN RADIANCE POTION INTENSE EXFOLIATING SET",
    price: "4 OMR",
    page: "SKINCARE.html#adorn-radiance-potion-intense-exfoliating-set",
    section: "FACIAL-SET"
  },
  {
    name: "BEAUTY VAULT WHITENING AND MAINTENANCE SET",
    price: "4 OMR",
    page: "SKINCARE.html#beautyvault-whiteningandmaintenance-set",
    section: "FACIAL-SET"
  },
  {
    name: "RYX SKIN GLOW BOMB DAILY CARE KIT",
    price: "4 OMR",
    page: "SKINCARE.html#ryxskin-glowbomb-dailycarekit",
    section: "FACIAL-SET"
  },
  {
    name: "FAIRY SKIN MILD FACIAL KIT",
    price: "4.5 OMR",
    page: "SKINCARE.html#fairyskin-mild-facialkit",
    section: "FACIAL-SET"
  },
  {
    name: "FAIRY SKIN PREMIUM BRIGHTENING KIT",
    price: "4.5 OMR",
    page: "SKINCARE.html#fairyskin-premium-brighteningkit",
    section: "FACIAL-SET"
  },
  {
    name: "BEAUTY VAULT PREMIUM REJUVENATING SET",
    price: "4 OMR",
    page: "SKINCARE.html#beautyvault-premium-rejuvenatingset",
    section: "FACIAL-SET"
  },
  {
    name: "ROSMAR THE ORIGINALS",
    price: "4 OMR",
    page: "SKINCARE.html#rosmar-theoriginals",
    section: "FACIAL-SET"
  },
  {
    name: "JAPAN SAKURA SKINCARE SET",
    price: "OMR",
    page: "SKINCARE.html#japan-sakura-skincareset",
    section: "FACIAL-SET"
  },
  {
    name: "CAKEPIE FEMININE CARE KIT",
    price: "5.8 OMR",
    page: "SKINCARE.html#cakepie-feminine-carekit",
    section: "FACIAL-SET"
  },
  {
    name: "MERRY SUN PERMANENT HAIR COLOR",
    price: "2.5 OMR",
    page: "HAIRCARE.html#merry-sun",
    section: "HAIR-COLOR"
  },
  {
    name: "BREMOD HAIR COLOR",
    price: "2 OMR",
    page: "HAIRCARE.html#bremod-haircolor",
    section: "HAIR-COLOR"
  },
  {
    name: "LUXE ORGANIX 100% PURE CASTER OIL",
    price: "4.5 OMR",
    page: "HAIRCARE.html#luxeorganix-100%-purecastoroil",
    section: "HAIR-TREATMENT"
  },
  {
    name: "BREMOD SUPER PLEX",
    price: "1.1 OMR",
    page: "HAIRCARE.html#bremod-superplex",
    section: "HAIR-TREATMENT"
  },
  {
    name: "CREAM SILK TREATMENT",
    price: "7 OMR",
    page: "HAIRCARE.html#creamsilk-treatment",
    section: "HAIR-TREATMENT"
  },
  {
    name: "KERABOND PINOY BRAZILIAN BOTOX",
    price: "5.5 OMR",
    page: "HAIRCARE.html#kerabond-pinoy-brazilian-botox",
    section: "HAIR-TREATMENT"
  },
  {
    name: "LUXE ORGANIX ALOE VERA SOOTHING GEL",
    price: "2.2 OMR",
    page: "HAIRCARE.html#luxeorganix-aloevera-soothinggel",
    section: "HAIR-TREATMENT"
  },
  {
    name: "PROLIFE ATLAS VITAMIN E",
    price: "2.5 OMR",
    page: "SUPPLEMENTS.html#prolife-atlas-vitamine",
    section: "VITAMINS"
  },
  {
    name: "MULTIVITAMINS + IRON STRESSTABS",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#multivitamins+iron-stresstabs",
    section: "VITAMINS"
  },
  {
    name: "POTEN-CEE VITAMIN C + COLLAGEN",
    price: "3.7 OMR",
    page: "SUPPLEMENTS.html#proten-cee-vitaminc+collagen",
    section: "VITAMINS"
  },
  {
    name: "C-1000mg",
    price: "3 OMR",
    page: "SUPPLEMENTS.html#c-1000mg",
    section: "VITAMINS"
  },
  {
    name: "MULTIVITAMINS + MINERALS CENTRUM ADVANCE",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#multivitamins+minerals-centrum-advance",
    section: "VITAMINS"
  },
  {
    name: "VITA BEARS DETOX VITAMINS",
    price: "6.5 OMR",
    page: "SUPPLEMENTS.html#vitabears-detox-vitamins",
    section: "VITAMINS"
  },
  {
    name: "VITA BEARS FLAWLESS GLOW",
    price: "6.5 OMR",
    page: "SUPPLEMENTS.html#vitabears-flawlessglow",
    section: "VITAMINS"
  },
  {
    name: "FITGUM APPLE CIDER VINEGAR GUMMIES",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#fitgum-applecidervinegar-gummies",
    section: "VITAMINS"
  },
  {
    name: "REALSKIN VITA SHAPE GUMMIES",
    price: "5.5 OMR",
    page: "SUPPLEMENTS.html#realskin-vita-shape-gummies",
    section: "VITAMINS"
  },
  {
    name: "REALSKIN VITA HAIR",
    price: "5.5 OMR",
    page: "SUPPLEMENTS.html#realskin-vitahair",
    section: "VITAMINS"
  },
  {
    name: "MULTIVITAMINS ENERVON",
    price: "4.5 OMR",
    page: "SUPPLEMENTS.html#multivitamins-enervon",
    section: "VITAMINS"
  },
  {
    name: "d-ALPHA TOCOPHEROL (VITAMIN E) MYRA E",
    price: "4.5 OMR",
    page: "SUPPLEMENTS.html#d-alpha-tocopherol(vitamine)myrae",
    section: "VITAMINS"
  },
  {
    name: "SENNA LEAVES SENNA PODS BIOFITEA",
    price: "4.5 OMR",
    page: "SUPPLEMENTS.html#senna-leaves-sennapods-biofitea",
    section: "SLIMMING"
  },
  {
    name: "BRILLIANT SKIN HELLO! MELO BEAUTY DRINK",
    price: "3 OMR",
    page: "SUPPLEMENTS.html#brilliantskin-hello!-melobeautydrink",
    section: "SLIMMING"
  },
  {
    name: "TOKYO VANILLA COFFEE",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#tokyo-vanilla-coffee",
    section: "SLIMMING"
  },
  {
    name: "HOT BABE",
    price: "4.5 OMR",
    page: "SUPPLEMENTS.html#hot-babe",
    section: "SLIMMING"
  },
  {
    name: "SIMPLEE SUPPLEMENT APPLE CIDER",
    price: "3.5 OMR",
    page: "SUPPLEMENTS.html#simplee-supplement-applecider",
    section: "SLIMMING"
  },
  {
    name: "ROBUST HERBAL DIETARY SUPPLEMENT CAPSULE FOR MEN",
    price: "5.5 OMR",
    page: "SUPPLEMENTS.html#robust-herbaldietary-supplement-capsuleformen",
    section: "SLIMMING"
  },
  {
    name: "NAVITAS PURE ORGANIC BARLEY",
    price: "2.5 OMR",
    page: "SUPPLEMENTS.html#navitas-pureorganic-barley",
    section: "SLIMMING"
  },
  {
    name: "LUXE BEAUTY",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#luxe-beauty",
    section: "SLIMMING"
  },
  {
    name: "MX3 COFFEE MIX",
    price: "4 OMR",
    page: "SUPPLEMENTS.html#mx3-coffee-mix",
    section: "SLIMMING"
  },
  {
    name: "SHEPU APPU",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#shepu-appu",
    section: "SLIMMING"
  },
  {
    name: "POMEGRENATE POWDER DRINK MIX",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#pomegranate-powderdrinkmix",
    section: "SLIMMING"
  },
  {
    name: "SLAY RECIPE FIBER BLEND LYCHEE SAKURA",
    price: "6 OMR",
    page: "SUPPLEMENTS.html#slay-recipefiberblend-lycheesakura",
    section: "SLIMMING"
  },
  {
    name: "KYOTO PREMIUM BLEND COFFEE",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#kyoto-premiumblend-coffee",
    section: "SLIMMING"
  },
  {
    name: "POKHARA CAPPUCCINO COFFEE",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#pokhara-cappuccino-coffee",
    section: "SLIMMING"
  },
  {
    name: "FRESHIES MELON DRINK",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#freshies-melomdrink",
    section: "SLIMMING"
  },
  {
    name: "SLAY RECIPE FIBER BLEND HONEY LEMON",
    price: "6 OMR",
    page: "SUPPLEMENTS.html#slay-recipefiberblend-honeylemon",
    section: "SLIMMING"
  },
  {
    name: "DETOXI SLIM COFFEE",
    price: "3.5 OMR",
    page: "SUPPLEMENTS.html#detoxi-slimcoffee",
    section: "SLIMMING"
  },
  {
    name: "LISHOU SLIMMING COFFEE",
    price: "3.5 OMR",
    page: "SUPPLEMENTS.html#lishou-slimming-coffee",
    section: "SLIMMING"
  },
  {
    name: "SENNA BIGUERLAI",
    price: "4.5 OMR",
    page: "SUPPLEMENTS.html#senna-biguerlai",
    section: "SLIMMING"
  },
  {
    name: "NEKOCEE",
    price: "3.5 OMR",
    page: "SUPPLEMENTS.html#nekocee",
    section: "SLIMMING"
  },
  {
    name: "DEARFACE BEAUTY MILK",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#dearface-beautymilk",
    section: "SLIMMING"
  },
  {
    name: "MK SMETICS SLIMMING-K",
    price: "4 OMR",
    page: "SUPPLEMENTS.html#mk-smetics-slimming-k",
    section: "SLIMMING"
  },
  {
    name: "LUXE SLIM",
    price: "4.5 OMR",
    page: "SUPPLEMENTS.html#luxe-slim",
    section: "SLIMMING"
  },
  {
    name: "MAX SLIM 7 DAYS",
    price: "4 OMR",
    page: "SUPPLEMENTS.html#max-slim-7days",
    section: "SLIMMING"
  },
  {
    name: "LUXE SLIM BEAUTY BEVERAGES",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#luxe-slim-beautybeverages",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "GLUTA LIPO GOLD SERIES",
    price: "4 OMR",
    page: "SUPPLEMENTS.html#gluta-lipo-goldseries",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "COLLAGEN KERATIN BIOTIN",
    price: "5.5 OMR",
    page: "SUPPLEMENTS.html#collagen-keratin-biotin",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "PURE COLLAGEN",
    price: "7 OMR",
    page: "SUPPLEMENTS.html#pure-collagen",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "GLUTATHIONE COLLAGEN GLOW",
    price: "4 OMR",
    page: "SUPPLEMENTS.html#glutathione-collagen-glow",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "GLUTA BERRY 200000 MG",
    price: "4 OMR",
    page: "SUPPLEMENTS.html#gluta-berry-200000-mg",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "SIMPLEE SUPPLEMENTS GINKO BILOBA",
    price: "3.5 OMR",
    page: "SUPPLEMENTS.html#simplee-supplements-ginko-biloba",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "FITGUM ORGANIC BARLEY",
    price: "2.5 OMR",
    page: "SUPPLEMENTS.html#fitgum-organic-barley",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "HELLO BLOOM MILKY AVOCADO",
    price: "OMR",
    page: "SUPPLEMENTS.html#hello-bloom-milky-avocado",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "20X COLLAGEN CHIA COFFEE",
    price: "3.5 OMR",
    page: "SUPPLEMENTS.html#20x-collagen-chia-coffee",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "ISHIN PREMIUM GLUTATHIONE PLUS",
    price: "6.5 OMR",
    page: "SUPPLEMENTS.html#ishin-premium-glutathione-plus",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "HIKARI ULTRA",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#hikari-ultra",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "GLUTA WHITE 1500000mg",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#gluta-white-1500000mg",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "BEAUTY VAULT LUMI",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#beauty-vault-lumi",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "SIMPLEE SUPPLEMENTS GLUTAGENC",
    price: "3.5 OMR",
    page: "SUPPLEMENTS.html#simplee-supplements-glutagenc",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "HIKARI COFFEE",
    price: "4 OMR",
    page: "SUPPLEMENTS.html#hikari-coffee",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "ISHIN ADVANCE WHITE JAPAN FORMULA",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#ishin-advance-white-japan-formula",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "NUGEN BLOOM COLLAGEN COFFEE",
    price: "4 OMR",
    page: "SUPPLEMENTS.html#nugen-bloom-collagen-coffee",
    section: "GLUTA & COLLAGEN"
  },
{
    name: "COLONGE",
    price: "2.5 OMR",
    page: "COSMETICS.html#colonge",
    section: "PERFUME"
  },
  {
    name: "LEWIS & PEARL SCENTSHOP",
    price: "OMR",
    page: "COSMETICS.html#lewis&pearl-scentshop",
    section: "PERFUME"
  },
  {
    name: "PRETTY BY FLORMAR",
    price: "FROM 500 BAIZA",
    page: "COSMETICS.html#pretty-by-flormar",
    section: "MAKEUP"
  },
  {
    name: "TEN TWENTY LIQUID FOUNDATION",
    price: "2.5 OMR",
    page: "COSMETICS.html#ten-twenty-liquid-foundation",
    section: "MAKEUP"
  },
  {
    name: "IMAN OF NOBLE 1",
    price: "OMR",
    page: "COSMETICS.html#iman-of-noble1",
    section: "MAKEUP"
  },
  {
    name: "RYANA HENNA BROWN",
    price: "1.5 OMR",
    page: "COSMETICS.html#ryana-henna-brown",
    section: "MAKEUP"
  },
  {
    name: "ONLY BEAUTY PERFECT POWDER",
    price: "2 OMR",
    page: "COSMETICS.html#only-beauty-perfect-powder",
    section: "MAKEUP"
  },
  {
    name: "EYELINER AND EYE MASCARA",
    price: "FROM 1 OMR TO 2 OMR",
    page: "COSMETICS.html#eyeliner",
    section: "EYELINER"
  },
  {
    name: "LUXE ORGANIX FEMME NATURALS WHITENING FEMININE WASH",
    price: "3.7 OMR",
    page: "HYGIENE.html#luxeorganix-femmenaturals-whitening-femininewash",
    section: "FEMININE WASH"
  },
  {
    name: "LUXE ORGANIX FEMME NATURALS ANTIBACTERIAL FEMININE WASH",
    price: "3.7 OMR",
    page: "HYGIENE.html#luxeorganix-femmenaturals-antibacterial-femininewash",
    section: "FEMININE WASH"
  },
  {
    name: "PRETTY PEACH FEMININE WASH WITH SUNFLOWER OIL",
    price: "1.8 OMR",
    page: "HYGIENE.html#prettypeach-femininewash-withsunfloweroil",
    section: "FEMININE WASH"
  },
  {
    name: "PINKY SECRET FEMININE WASH",
    price: "1.5 OMR",
    page: "HYGIENE.html#pinksecret-femininewash",
    section: "FEMININE WASH"
  },
  {
    name: "SASKIN KITTY FIED",
    price: "2.5 OMR",
    page: "HYGIENE.html#saskin-kittyfied",
    section: "FEMININE WASH"
  },
  {
    name: "SCOBAN WHITENING TOOTHPASTE",
    price: "1.9 OMR",
    page: "HYGIENE.html#scoban-whitening-toothpaste",
    section: "ORAL CARE"
  },
  {
    name: "SCOBAN VITAMIN C PROBIOTIC WHITENING TOOTH POWDER",
    price: "1.8 OMR",
    page: "HYGIENE.html#scoban-vitaminc-probiotic-whitening-toothpowder",
    section: "ORAL CARE"
  },
  {
    name: "SASKIN KILI-KILIFIED DEODORANT SPRAY",
    price: "2.5 OMR",
    page: "HYGIENE.html#saskin-kili-kilified-deodorant-spray",
    section: "DEODORANT"
  },
  {
    name: "TEEN'S TAWAS DEODORANT POWDER",
    price: "500 BAIZA",
    page: "HYGIENE.html#teens-tawas-deodorant-powder",
    section: "DEODORANT"
  },
  {
    name: "JSKIN BEAUTY HYDRA MOIST ICE WATER SLEEPING MASK",
    price: "4 OMR",
    page: "HYGIENE.html#jskin-beauty-hydra-moist-icewater-sleeping-mask",
    section: "MASK"
  },
  {
    name: "FACE MASK",
    price: "500 BAIZA",
    page: "HYGIENE.html#face-mask",
    section: "MASK"
  },
  {
    name: "PUREDERM HEMP SEED ESSENCE MASK",
    price: "600 BAIZA",
    page: "HYGIENE.html#purederm-hempseed-essencemask",
    section: "MASK"
  },
  {
    name: "PUREDERM CHAMOMILE COLLAGEN MASK",
    price: "600 BAIZA",
    page: "HYGIENE.html#purederm-chamomile-collagenmask",
    section: "MASK"
  },
  {
    name: "PUREDERM CICA ESSENCE MASK",
    price: "600 BAIZA",
    page: "HYGIENE.html#purederm-cica-essencemask",
    section: "MASK"
  },
  {
    name: "PUREDERM TOMATO COLLAGEN MASK",
    price: "600 BAIZA",
    page: "HYGIENE.html#purederm-tomato-collagenmask",
    section: "MASK"
  },
  {
    name: "KILIBUM SOAP",
    price: "2.6 OMR",
    page: "SKINCARE.html#kilibum-soap",
    section: "SOAP"
  },
  {
    name: "JENNIE MOON SOAP",
    price: "3.9 OMR",
    page: "SKINCARE.html#jenniemoon-soap",
    section: "SOAP"
  },
  {
    name: "PRECIOUS SKIN SOAP",
    price: "1.6 OMR",
    page: "SKINCARE.html#preciousskin-soap",
    section: "SOAP"
  },
  {
    name: "ALADA SOAP",
    price: "3.5 OMR",
    page: "SKINCARE.html#alada-soap",
    section: "SOAP"
  },
  {
    name: "GEISHA WHITE SOAP",
    price: "2.5 OMR",
    page: "SKINCARE.html#geishawhite-soap",
    section: "SOAP"
  },
  {
    name: "JIMFENS CYPRESS LEAF USMAN GRASS SHAMPOO SOAP",
    price: "3.7 OMR",
    page: "SKINCARE.html#jimfens-shampoosoap",
    section: "SOAP"
  },
  {
    name: "ALADA DEWY GLUTA SOAP",
    price: "3 OMR",
    page: "SKINCARE.html#alada-dewy-gluta-soap",
    section: "SOAP"
  },
  {
    name: "FERSULFATE IRON",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#fersulfate-iron",
    section: "VITAMINS"
  },
  {
    name: "FERSULFATE IRON",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#fersulfate-iron",
    section: "VITAMINS"
  },
  {
    name: "DAILY PLUS SHAPEXPRESS",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#dailyplus-shapexpress",
    section: "SLIMMING"
  },
  {
    name: "PARAGIS",
    price: "6 OMR",
    page: "SUPPLEMENTS.html#paragis",
    section: "SLIMMING"
  },
  {
    name: "DAILY PLUS PEARLSKIN WHITE TOMATO",
    price: "5.5 OMR",
    page: "SUPPLEMENTS.html#dailyplus-pearlskin-whitetomato",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "WEEKIT7 ACAI BERRY BEAUTY",
    price: "4 OMR",
    page: "SUPPLEMENTS.html#weekit7-acaiberrybeauty",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "HIKARI SKIN ESSENTIALS AURUM S-ACETYL GLUTATHIONE",
    price: "9.4 OMR",
    page: "SUPPLEMENTS.html#hikari-skinessentials-aurum",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "BRILLIANT COLOURS HYPER HYDRA PRESSED POWDER",
    price: "3 OMR",
    page: "COSMETICS.html#brilliantcolours-hyperhydra-pressedpowder",
    section: "MAKEUP"
  },
  {
    name: "BREMOD PREMIUM SERIES HAIR COLOURANT",
    price: "2 OMR",
    page: "HAIRCARE.html#bremod-premiumseries-haircolourant",
    section: "HAIR-COLOR"
  },
  {
    name: "VIBRANT GLAMOUR RETINOL CREAM",
    price: "2.5 OMR",
    page: "SKINCARE.html#vibrant-glamour-retinol-cream",
    section: "CREAM"
  },
  {
    name: "THE ELF NANO WHITE DOSE",
    price: "4.4 OMR",
    page: "SKINCARE.html#theelf-nanowhitedose",
    section: "SERUM"
  },
  {
    name: "VIBRANT GLAMOUR RETINOL ESSENCE TONER",
    price: "3 OMR",
    page: "SKINCARE.html#vibrant-glamour-retinol-essence-toner",
    section: "TONER"
  },
  {
    name: "PAPA FEEL NIACINAMIDE WHITENING SUNSCREEN SPRAY",
    price: "6.8 OMR",
    page: "SKINCARE.html#papafeel-niacinamide-whitening-sunscreen-spray",
    section: "SUNSCREEN"
  },
  {
    name: "PRECIOUS SKIN ALPHA ARBUTIN 3+ COLLAGEN UNDERARM CREAM",
    price: "3.1 OMR",
    page: "SKINCARE.html#preciouskin-alphaarbutin3+-collagen-underarmcream",
    section: "CREAM"
  },
  {
    name: "BREMOD PERFORMANCE PREMIUM SERIES OXIDANT CREAM",
    price: "1.2 OMR",
    page: "HAIRCARE.html#bremodperformance-premiumseries-oxidantcream",
    section: "HAIR-COLOR"
  },
  {
    name: "SHIRTS #1",
    price: "1 OMR",
    page: "OTHER.html#shirts-1",
    section: "CLOTHES"
  },
  {
    name: "SHIRTS #2",
    price: "1 OMR",
    page: "OTHER.html#shirts-2",
    section: "CLOTHES"
  },
  {
    name: "SHIRTS #3",
    price: "1 OMR",
    page: "OTHER.html#shirts-3",
    section: "CLOTHES"
  },
  {
    name: "SHIRTS #4",
    price: "1 OMR",
    page: "OTHER.html#shirts-4",
    section: "CLOTHES"
  },
  {
    name: "SHIRTS #5",
    price: "1 OMR",
    page: "OTHER.html#shirts-5",
    section: "CLOTHES"
  },
  {
    name: "SHIRTS #6",
    price: "1 OMR",
    page: "OTHER.html#shirts-6",
    section: "CLOTHES"
  },
  {
    name: "SHIRTS #7",
    price: "1 OMR",
    page: "OTHER.html#shirts-7",
    section: "CLOTHES"
  },
  {
    name: "SHIRTS #8",
    price: "1 OMR",
    page: "OTHER.html#shirts-8",
    section: "CLOTHES"
  },
  {
    name: "STICK ON NAILS",
    price: "FROM 600 BAIZA TO 1 OMR",
    page: "OTHER.html#stick-on-nails",
    section: "NAILS"
  },
  {
    name: "NAIL CARE & POLISH",
    price: "FROM 300 BAIZA TO 900 BAIZA",
    page: "OTHER.html#nailcare-&-polish",
    section: "NAILS"
  },
  {
    name: "BEAUTY TOOLS",
    price: "FROM 300 BAIZA TO 2 OMR",
    page: "OTHER.html#beauty-tools",
    section: "BEAUTY TOOLS"
  },
  {
    name: "GLOBE SIM CARD 5G",
    price: "2.5 OMR",
    page: "OTHER.html#globesimcard-5g",
    section: "SIM CARD"
  },
  {
    name: "SCD VIRGINITICARE FEMININE WASH",
    price: "2.2 OMR",
    page: "OTHER.html#scd-virginiticare-femininewash",
    section: "FEMININE WASH"
  },
  {
    name: "POVIDONE-IODINE BETADINE FEMININE WASH",
    price: "4.7 OMR",
    page: "OTHER.html#pib-femininewash",
    section: "FEMININE WASH"
  },
  {
    name: "PUREDERM MAKE-UP CLEANSING TISSUES",
    price: "900 BAIZA",
    page: "HYGIENE.html#purederm-make-up-cleansing-tissues",
    section: "COTTON WOOL & BUDS"
  },
  {
    name: "SKIN DOCTOR 5 IN 1 COSMETIC SET #1",
    price: "800 BAIZA",
    page: "HYGIENE.html#skindoctor-5in1-cosmeticset1",
    section: "COTTON WOOL & BUDS"
  },
  {
    name: "SKIN DOCTOR 5 IN 1 COSMETIC SET #2",
    price: "1 OMR",
    page: "HYGIENE.html#skindoctor-5in1-cosmeticset2",
    section: "COTTON WOOL & BUDS"
  },
  {
    name: "SPONGE STICK",
    price: "900 BAIZA",
    page: "HYGIENE.html#sponge-stick",
    section: "COTTON WOOL & BUDS"
  },
  {
    name: "SKIN DOCTOR COSMETIC PADS",
    price: "600 BAIZA",
    page: "HYGIENE.html#skindoctor-cosmeticpads",
    section: "COTTON WOOL & BUDS"
  },
  {
    name: "SKIN DOCTOR 80 ROUND COSMETIC COTTON",
    price: "900 BAIZA",
    page: "HYGIENE.html#skindoctor-80round-cosmeticcotton",
    section: "COTTON WOOL & BUDS"
  },
  {
    name: "PUREDERM ALOE COLLAGEN MASK",
    price: "600 BAIZA",
    page: "HYGIENE.html#purederm-aloe-collagenmask",
    section: "MASK"
  },
  {
    name: "PUREDERM BLUEBERRY COLLAGEN MASK",
    price: "600 BAIZA",
    page: "HYGIENE.html#purederm-blueberry-collagenmask",
    section: "MASK"
  },
  {
    name: "PUREDERM CUCUMBER COLLAGEN MASK",
    price: "600 BAIZA",
    page: "HYGIENE.html#purederm-cucumber-collagenmask",
    section: "MASK"
  },
  {
    name: "PUREDERM HONEY ESSENCE MASK",
    price: "600 BAIZA",
    page: "HYGIENE.html#purederm-honey-essencemask",
    section: "MASK"
  },
  {
    name: "PUREDERM OLIVE COLLAGEN MASK",
    price: "600 BAIZA",
    page: "HYGIENE.html#purederm-olive-collagenmask",
    section: "MASK"
  },
  {
    name: "PUREDERM COFFEE ESSENCE MASK",
    price: "600 BAIZA",
    page: "HYGIENE.html#purederm-coffee-essencemask",
    section: "MASK"
  },
  {
    name: "PUREDERM GREEN TEA COLLAGEN MASK",
    price: "600 BAIZA",
    page: "HYGIENE.html#purederm-greentea-collagenmask",
    section: "MASK"
  },
  {
    name: "PUREDERM AVOCADO COLLAGEN MASK",
    price: "600 BAIZA",
    page: "HYGIENE.html#purederm-avocado-collagenmask",
    section: "MASK"
  },
  {
    name: "SEOMOU STRAWBERRY BOUNCE SMOOTHING MASK",
    price: "400 BAIZA",
    page: "HYGIENE.html#seomou-strawberrybounce-smoothingmask",
    section: "MASK"
  },
  {
    name: "ORGANIC SKIN BRIGHTENING EXPERT DEODORANT",
    price: "2.8 OMR",
    page: "HYGIENE.html#organicskin-brighteningexpert-deodorant",
    section: "DEODORANT"
  },
  {
    name: "ORGANIC SKIN INTENSIVE WHITENING DEODORANT",
    price: "2.8 OMR",
    page: "HYGIENE.html#organicskin-intensivewhitening-deodorant",
    section: "DEODORANT"
  },
  {
    name: "SILKA GREEN PAPAYA DEODORANT",
    price: "1.8 OMR",
    page: "HYGIENE.html#silka-greenpapaya-deodorant",
    section: "DEODORANT"
  },
  {
    name: "SILKA PAPAYA DEODORANT",
    price: "1.8 OMR",
    page: "HYGIENE.html#silka-papaya-deodorant",
    section: "DEODORANT"
  },
  {
    name: "SKINWHITE CLASSIC DEODORANT",
    price: "2 OMR",
    page: "HYGIENE.html#skinwhite-classic-deodorant",
    section: "DEODORANT"
  },
  {
    name: "BELO INTENSE WHITE",
    price: "2 OMR",
    page: "HYGIENE.html#belo-intensewhite",
    section: "DEODORANT"
  },
  {
    name: "SNOW WHITE TAWAS W/ PERFUME POWDER",
    price: "500 BAIZA",
    page: "HYGIENE.html#snowwhitetawas-perfumepowder",
    section: "DEODORANT"
  },
  {
    name: "SNOW WHITE TAWAS POWDER",
    price: "500 BAIZA",
    page: "HYGIENE.html#snowwhitetawas-powder",
    section: "DEODORANT"
  },
  {
    name: "MIRACLE TAWAS W/ CALAMANSI",
    price: "1.2 OMR",
    page: "HYGIENE.html#miracle-tawas-calamansi",
    section: "DEODORANT"
  },
  {
    name: "FORMULOVE NIACINAMIDE TAWAS CREAM",
    price: "1.3 OMR",
    page: "HYGIENE.html#formulove-tawascream-niacinamide",
    section: "DEODORANT"
  },
  {
    name: "RITUALS THE RITUAL OF SAKURA",
    price: "2.5 OMR",
    page: "HYGIENE.html#rituals-theritual-ofsakura",
    section: "DEODORANT"
  },
  {
    name: "K-BEAUTE HAPPY UA INTENSIVE WHITENING DEO SPRAY",
    price: "3 OMR",
    page: "HYGIENE.html#k-beaute-happyua-deospray",
    section: "DEODORANT"
  },
  {
    name: "ARMPIT SERUM",
    price: "1.2 OMR",
    page: "HYGIENE.html#armpit-serum",
    section: "DEODORANT"
  },
  {
    name: "EYELINER PENCIL",
    price: "1 OMR",
    page: "COSMETICS.html#eyelinerpencil",
    section: "EYELINER"
  },
  {
    name: "BRILLIANT COLOURS LIP & CHEEK TINT",
    price: "1.5 OMR",
    page: "COSMETICS.html#brilliantcolours-lip&cheek-tint",
    section: "LIPSTICK/LIPGLOSS"
  },
  {
    name: "PENCIL LIP LINER",
    price: "1 OMR EACH",
    page: "COSMETICS.html#pencil-lip-liner",
    section: "LIPSTICK/LIPGLOSS"
  },
  {
    name: "LIPSTICK",
    price: "1 OMR EACH",
    page: "COSMETICS.html#lipstick",
    section: "LIPSTICK/LIPGLOSS"
  },
  {
    name: "WELLSPRING MELATONIN",
    price: "9.1 OMR",
    page: "SUPPLEMENTS.html#wellspring-melatonin",
    section: "VITAMINS"
  },
  {
    name: "LING ZHI CHUANG YAO WAN",
    price: "4.2 OMR",
    page: "SUPPLEMENTS.html#ling-zhi-chuang-yao-wan",
    section: "VITAMINS"
  },
  {
    name: "FORTIMA VITAMIN E + VITAMIN C + ZINC",
    price: "7 OMR",
    page: "SUPPLEMENTS.html#fortima-vitae+-vitac+-zinc",
    section: "VITAMINS"
  },
  {
    name: "AISHI HARMONY OVALANCE",
    price: "7 OMR",
    page: "SUPPLEMENTS.html#aishi-harmony-ovalance",
    section: "VITAMINS"
  },
{
    name: "K-DRINKS SIP N' GO COFFEE",
    price: "5.2 OMR",
    page: "SUPPLEMENTS.html#k-drinks-sip-n'-go-coffee",
    section: "SLIMMING"
  },
  {
    name: "K-DRINKS SIP N' GO COCOA",
    price: "4.7 OMR",
    page: "SUPPLEMENTS.html#k-drinks-sip-n'-go-cocoa",
    section: "SLIMMING"
  },
  {
    name: "PROSLIM C9 COFFEE MIX GOLD",
    price: "7.6 OMR",
    page: "SUPPLEMENTS.html#proslim-c9-coffee-mix-gold",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "FITGUM COLLAGEN CHIA COFFEE MIX",
    price: "2.8 OMR",
    page: "SUPPLEMENTS.html#fitgum-collagen-chia-coffee-mix",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "DEAR FACE BEAUTY BEAN PREMIUM KOREAN MOCHA COFFEE",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#dearface-beautybean-premiumkorean-mochacoffee",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "KUMIKO COLLAGEN TRIPEPTIDE 150000 MG",
    price: "6.2 OMR",
    page: "SUPPLEMENTS.html#kumiko-collagen-tripeptide-150000mg",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "MIKEO BLOOD ORANGE C",
    price: "4.8 OMR",
    page: "SUPPLEMENTS.html#mikeo-blood-orangec",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "JOJI VITA C COLLAGEN PLUS+",
    price: "4 OMR",
    page: "SUPPLEMENTS.html#joji-vitac-collagenplus+",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "WINK WHITE COLLAGEN BLUE HYA PLUS",
    price: "5 OMR",
    page: "SUPPLEMENTS.html#winkwhite-collagen-blue-hya-plus",
    section: "GLUTA & COLLAGEN"
  },
  {
    name: "AUGEAS HERBAL HAIR DYE SHAMPOO",
    price: "5.6 OMR",
    page: "HAIRCARE.html#augeas-herbal-hairdye-shampoo",
    section: "HAIR-COLOR"
  },
  {
    name: "CROWNING GLORY VIRGIN COCONUT OIL",
    price: "1 OMR",
    page: "HAIRCARE.html#crowningglory-virgin-coconut-oil",
    section: "HAIR-TREATMENT"
  },
  {
    name: "THE ORDINARY HAIR CARE",
    price: "9 OMR",
    page: "HAIRCARE.html#theordinary-haircare",
    section: "HAIR-TREATMENT"
  },
  {
    name: "STRANDS MINOXIDIL 6%",
    price: "3.6 OMR",
    page: "HAIRCARE.html#strands-minoxidil-6%",
    section: "HAIR-TREATMENT"
  },
  {
    name: "KERABOND ULTRA-IONIC STRAIGHT DEAL SERIES",
    price: "3 OMR",
    page: "HAIRCARE.html#kerabond-ultra-ironic-straight-deal-series",
    section: "HAIR-TREATMENT"
  },
  {
    name: "KERABOND ULTRA-IONIC BRAZILIAN MAINTENANCE",
    price: "1.8 OMR",
    page: "HAIRCARE.html#kerabond-ultra-ionic-brazilian-maintenance",
    section: "HAIR-TREATMENT"
  },
  {
    name: "CREAM SILK TRIPLE KERATIN COLLAGEN SERUM CONDITIONER",
    price: "1.9 OMR",
    page: "HAIRCARE.html#creamsilk-triple-keratin-collagen-serum-conditioner",
    section: "SHAMPOO & CONDITIONER"
  },
  {
    name: "CREAM SILK TRIPLE KERATIN RESCUE ULTIMATE STRAIGHT CONDITIONER",
    price: "1.9 OMR",
    page: "HAIRCARE.html#creamsilk-triple-keratin-rescue-ultimate-straight-conditioner",
    section: "SHAMPOO & CONDITIONER"
  },
  {
    name: "CREAM SILK STANDOUT STRAIGHT VITAMIN BOOST CONDITIONER",
    price: "1.6 OMR",
    page: "HAIRCARE.html#creamsilk-pink",
    section: "SHAMPOO & CONDITIONER"
  },
  {
    name: "CREAM SILK HAIR FALL DEFENSE VITAMIN BOOST CONDITIONER",
    price: "1.6 OMR",
    page: "HAIRCARE.html#creamsilk-green",
    section: "SHAMPOO & CONDITIONER"
  },
  {
    name: "CREAM SILK DRY RESCUE CONDITIONER",
    price: "1.6 OMR",
    page: "HAIRCARE.html#creamsilk-orange",
    section: "SHAMPOO & CONDITIONER"
  },
  {
    name: "CREAM SILK DAMAGE CONTROL VITAMIN BOOST CONDITIONER",
    price: "1.6 OMR",
    page: "HAIRCARE.html#creamsilk-blue",
    section: "SHAMPOO & CONDITIONER"
  },
  {
    name: "SHAWILL SAKURA CONDITIONER",
    price: "3.5 OMR",
    page: "HAIRCARE.html#shawill-sakura-conditioner",
    section: "SHAMPOO & CONDITIONER"
  },
  {
    name: "MANIC BEAUTY CLOUD STRENGTHENING CONDITIONER",
    price: "7 OMR",
    page: "HAIRCARE.html#manic-beautycloud-strengthening-conditioner",
    section: "SHAMPOO & CONDITIONER"
  },
  {
    name: "BREMOD COCOA BUTTER SHAMPOO",
    price: "3.5 OMR",
    page: "HAIRCARE.html#bremod-cocoabutter-shampoo",
    section: "SHAMPOO & CONDITIONER"
  },
  {
    name: "BELLA AMORE SKIN HIMALAYAN SHAMPOO",
    price: "4.5 OMR",
    page: "HAIRCARE.html#bellaamoreskin-himalayan-shampoo",
    section: "SHAMPOO & CONDITIONER"
  },
  {
    name: "HAIR GROWTH SHAMPOO ANTI-HAIR LOSS CONDITIONER",
    price: "3 OMR",
    page: "HAIRCARE.html#hairgrowth-shampoo-anti-hairloss-conditioner",
    section: "SHAMPOO & CONDITIONER"
  },
  {
    name: "BLEM DR. PREMIUM REJUVENATING SET",
    price: "3.7 OMR",
    page: "SKINCARE.html#blemdr-premium-rejuvenatingset",
    section: "FACIAL SET"
  },
  {
    name: "SY GLOW 24K GOLD LUMINOUS LOTION",
    price: "4.2 OMR",
    page: "SKINCARE.html#syglow-24kgold-luminous-lotion",
    section: "LOTION"
  },
  {
    name: "VASELINE GLUTA-HYA FLAWLESS GLOW SERUM BURST UV LOTION",
    price: "4 OMR",
    page: "SKINCARE.html#vaseline-gluta-hya-flawlesslow-serum-burstuv-lotion",
    section: "LOTION"
  },
  {
    name: "GLUTATHIONE 50X TONE UP BODY LOTION",
    price: "3.5 OMR",
    page: "SKINCARE.html#glutathione-50x-toneup-bodylotion",
    section: "LOTION"
  },
  {
    name: "HALLY NIACINAMIDE WHITENING BODY LOTION",
    price: "3.4 OMR",
    page: "SKINCARE.html#hally-niacinamide-whitening-bodylotion",
    section: "LOTION"
  },
  {
    name: "DEAR BODY ROCKING FANTASY HAND & BODY CEAM",
    price: "2 OMR",
    page: "SKINCARE.html#dearbody-rocking-fantasy-hand&body-lotion",
    section: "LOTION"
  },
  {
    name: "DEAR BODY CHIC SEASON HAND & BODY CREAM",
    price: "2 OMR",
    page: "SKINCARE.html#dearbody-chicseason-hand&body-lotion",
    section: "LOTION"
  },
  {
    name: "VASELINE COCOA GLOW BODY LOTION",
    price: "1.9 OMR",
    page: "SKINCARE.html#vaseline-cocoa-glow-bodylotion",
    section: "LOTION"
  },
  {
    name: "A BONNE MILK POWER NIACINAMIDE LOTION",
    price: "5 OMR",
    page: "SKINCARE.html#abonnemilk-power-niacinamide-lotion",
    section: "LOTION"
  },
  {
    name: "A BONNE DEWY HYA NIACINAMIDE AURA ESSENCE LOTION",
    price: "5 OMR",
    page: "SKINCARE.html#abonne-dewy-hya-niacinamide-auraessence-lotion",
    section: "LOTION"
  },
  {
    name: "KOJIC ACID SKIN LIGHTENING BODY LOTION",
    price: "1.9 OMR",
    page: "SKINCARE.html#kojicacid-skin-lightening-bodylotion",
    section: "LOTION"
  },
  {
    name: "BONITA HIMALAYAN PINK SALT EXFOLIATING SOAP BAR",
    price: "1.3 OMR",
    page: "SKINCARE.html#bonita-himalayan-pinksalt-exfoliating-soapbar",
    section: "SOAP"
  },
  {
    name: "BONITA SUNFLOWER NIACINAMIDE MINERAL SOAP BAR",
    price: "1.6 OMR",
    page: "SKINCARE.html#bonita-sunflower-niacinamide-mineral-soapbar",
    section: "SOAP"
  },
  {
    name: "ST. DALFOUR WHITENING SOAP WHITH GLUTATHIONE",
    price: "5 OMR",
    page: "SKINCARE.html#st.dalfour-whitening-soap-withglutathione",
    section: "SOAP"
  },
  {
    name: "SKINOREN ACNE PIMPLE SOAP",
    price: "4 OMR",
    page: "SKINCARE.html#skinoren-acnepimple-soap",
    section: "SOAP"
  },
  {
    name: "KOJIC ACID CLASSIC WHITENING SOAP",
    price: "1.3 OMR",
    page: "SKINCARE.html#kojicacid-classic-whitening-soap",
    section: "SOAP"
  },
  {
    name: "KOJIC ACID VIT C SOAP",
    price: "1.3 OMR",
    page: "SKINCARE.html#kojicacid-vitc-soap",
    section: "SOAP"
  },
  {
    name: "KOJIC ACID PAPAYA SOAP",
    price: "1.3 OMR",
    page: "SKINCARE.html#kojicacid-papaya-soap",
    section: "SOAP"
  },
  {
    name: "DR. ALVIN KOJIC ACID SOAP",
    price: "1.1 OMR",
    page: "SKINCARE.html#dr.alvin-kojicacid-soap",
    section: "SOAP"
  },
  {
    name: "DELI SKIN NANO WHITE GLUTA 50X WHITENING SOAP",
    price: "2.5 OMR",
    page: "SKINCARE.html#deliskin-nanowhite-gluta-50x-whitening-soap",
    section: "SOAP"
  },
  {
    name: "KATIALIS SULFER ZINC OXIDE SALICYLIC ACID SOAP",
    price: "1.7 OMR",
    page: "SKINCARE.html#katialis-sulfer-zincoxide-salicylicacid-soap",
    section: "SOAP"
  },
  {
    name: "BEAUTY VAULT ADLAW DEFENSE SUNSCREEN",
    price: "2.7 OMR",
    page: "SKINCARE.html#beautyvault-adlaw-defense-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "TRANSFORMED SKIN HONEST GLOW TINTED PAPAYA SUNSCREEN",
    price: "2.8 OMR",
    page: "SKINCARE.html#transformedskin-honestglow-tintedpapaya-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "MS. TSUNG PREMIUM SUNKISSED TINTED SUNSCREEN",
    price: "3.2 OMR",
    page: "SKINCARE.html#mstsung-premium-sunkissed-tinted-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "MAI-PEEL SUN PROTECTION CREAM",
    price: "600 BAIZA",
    page: "SKINCARE.html#mai-peel-sunprotection-cream",
    section: "SUNSCREEN"
  },
  {
    name: "CAPADOSA CREAM",
    price: "2.5 OMR",
    page: "SKINCARE.html#capadosa-cream",
    section: "SUNSCREEN"
  },
  {
    name: "O.TWO.O UV PROTECTION CLEAR SUNSCREEN",
    price: "4.5 OMR",
    page: "SKINCARE.html#o.two.o-uvprotection-clear-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "BRILLIANT SKIN ESSENTIALS TINTED SUNSCREEN",
    price: "2.6 OMR",
    page: "SKINCARE.html#brilliantskin-essentials-tinted-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "BRILLIANT SKIN SUNSCREEN GEL-CREAM SPF30",
    price: "3.3 OMR",
    page: "SKINCARE.html#brilliantskin-sunscreen-gel-cream",
    section: "SUNSCREEN"
  },
  {
    name: "BELO SUNEXPERT WHITENING SUNSCREEN",
    price: "3.4 OMR",
    page: "SKINCARE.html#belo-sunexpert-whitening-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "KISS BEAUTY SUNSCREEN CREAM",
    price: "1.2 OMR",
    page: "SKINCARE.html#kissbeauty-sunscreen-creams",
    section: "SUNSCREEN"
  },
  {
    name: "KISS BEAUTY HYALURONIC ACID SUNSCREEN CREAM",
    price: "1.2 OMR",
    page: "SKINCARE.html#kissbeauty-hyaluronicacid-sunscreencream",
    section: "SUNSCREEN"
  },
  {
    name: "SCD SUNBLOCK CREAM TINT WITH PLACENTA",
    price: "1.5 OMR",
    page: "SKINCARE.html#scd-sunblock-cream-tint-with-placent",
    section: "SUNSCREEN"
  },
  {
    name: "BLEM DR. TINTED SUNSCREEN",
    price: "2.8 OMR",
    page: "SKINCARE.html#blemdr-tinted-sunscreen",
    section: "SUNSCREEN"
  },
  {
    name: "4-8 YEARS OLD KIDS DRESS #1",
    price: "1 OMR",
    page: "OTHER.html#kidsdress-1",
    section: "CLOTHES"
  },
  {
    name: "4-8 YEARS OLD KIDS DRESS #2",
    price: "1 OMR",
    page: "OTHER.html#kidsdress-2",
    section: "CLOTHES"
  },
  {
    name: "4-8 YEARS OLD KIDS DRESS #3",
    price: "1 OMR",
    page: "OTHER.html#kidsdress-3",
    section: "CLOTHES"
  },
  {
    name: "4-8 YEARS OLD KIDS DRESS #4",
    price: "1 OMR",
    page: "OTHER.html#kidsdress-4",
    section: "CLOTHES"
  },
  {
    name: "4-8 YEARS OLD KIDS DRESS #5",
    price: "1 OMR",
    page: "OTHER.html#kidsdress-5",
    section: "CLOTHES"
  },
  {
    name: "MS. TSUNG GLASS SKIN FACIAL FOAMING CLEANSER",
    price: "3 OMR",
    page: "SKINCARE.html#mstsung-glasskin-facial-foaming-cleanser",
    section: "FACIAL-CLEANSER-WASH"
  },
  {
    name: "YC WHITENING VITAMIN C FACE WASH",
    price: "1.5 OMR",
    page: "SKINCARE.html#yc-whitening-vitaminc-facewash",
    section: "FACIAL-CLEANSER-WASH"
  },
  {
    name: "CETAPHIL OILY SKIN CLEANSER",
    price: "8 OMR",
    page: "SKINCARE.html#cetaphil-oilyskin-cleanser",
    section: "FACIAL-CLEANSER-WASH"
  },
  {
    name: "KOJIC ACID CLASSIC FOAM CLEANSER",
    price: "1.9 OMR",
    page: "SKINCARE.html#kojicacid-classic-foamcleanser",
    section: "FACIAL-CLEANSER-WASH"
  },
  {
    name: "BLEM DR. FOAMING FACIAL WASH",
    price: "3.5 OMR",
    page: "SKINCARE.html#blemdr-foaming-facialwash",
    section: "FACIAL-CLEANSER-WASH"
  },
  {
    name: "12% AZELAIC ACID",
    price: "3.2 OMR",
    page: "SKINCARE.html#12%-azelaic-acid",
    section: "TREATMENT"
  },
  {
    name: "JAMJOOM PHARMA ACRETIN 0.05% FOR ACNE TREATMENT",
    price: "2.6 OMR",
    page: "SKINCARE.html#jamjoom-pharma-acretin-0.05%",
    section: "TREATMENT"
  },
  {
    name: "ESAPHARMA MOVATE",
    price: "600 BAIZA",
    page: "SKINCARE.html#esapharma-movate",
    section: "TREATMENT"
  },
  {
    name: "MELANTHENOL GEL D-PANTHENOL 5% SKIN MOISTURIZING GEL",
    price: "1.8 OMR",
    page: "SKINCARE.html#melanthenolgel-d-panthenol5%-skin-moisturinggel",
    section: "TREATMENT"
  },
  {
    name: "MELANO CIVIC CREAM",
    price: "1.8 OMR",
    page: "SKINCARE.html#melano-civic-cream",
    section: "TREATMENT"
  },
  {
    name: "MELANOCIVIC CREAM TOPICAL CREAM MILK",
    price: "1.8 OMR",
    page: "SKINCARE.html#melano-civic-cream-topicalcream-milk",
    section: "TREATMENT"
  },
  {
    name: "SKINOREN CREAM",
    price: "6 OMR",
    page: "SKINCARE.html#skinoren-cream",
    section: "TREATMENT"
  },
  {
    name: "BEPANTHEN MOISTURIZING CREAM",
    price: "3.4 OMR",
    page: "SKINCARE.html#bepanthen-moisturizing-cream",
    section: "TREATMENT"
  },
  {
    name: "FACE & BODY MAKEUP",
    price: "FROM 500 BAIZA - 4 OMR",
    page: "COSMETICS.html#face&bodypowder",
    section: "MAKEUP"
  },
  {
    name: "ASHLEY SHINE NIACINAMIDE ULTIMATE GLOW SERUM",
    price: "4 OMR",
    page: "SKINCARE.html#ashley-shine-niacinamide-ultimate-glow-serum",
    section: "SERUM"
  },
  {
    name: "DR. ALVIN AHA SERUM MEGA DOSE",
    price: "1.9 OMR",
    page: "SKINCARE.html#dr.alvin-aha-serum-mega-dose",
    section: "SERUM"
  },
  {
    name: "ALPHA ARBUTIN 3 PLUS COLLAGEN BODY SERUM",
    price: "2.8 OMR",
    page: "SKINCARE.html#alpha-arbutin-3plus-collagen-body-serum",
    section: "SERUM"
  },
  {
    name: "SCD RETINOL SERUM",
    price: "5 OMR",
    page: "SKINCARE.html#scd-retinolserum",
    section: "SERUM"
  },
  {
    name: "ALPHA ARBUTIN 3 PLUS COLLAGEN SERUM",
    price: "3.3 OMR",
    page: "SKINCARE.html#alpha-arbutin-3plus-collagen-serum",
    section: "SERUM"
  },
  {
    name: "SKIN DOCTOR ALPHA ARBUTIN ANT-SPOT WHITENING",
    price: "2.2 OMR",
    page: "SKINCARE.html#skindoctor-alphaarbutin-serum",
    section: "SERUM"
  },
  {
    name: "KOJIC ACID SKIN LIGHTENING FACE SERUM",
    price: "1.9 OMR",
    page: "SKINCARE.html#kojicacid-faceserum",
    section: "SERUM"
  },
  {
    name: "PRETTY COWRY LICORICE ROOT SERUM",
    price: "2.6 OMR",
    page: "SKINCARE.html#prettycowry-licoriceroot-serum",
    section: "SERUM"
  },
  {
    name: "CAROTONE BLACK SPOT CORRECTOR VANISHING SERUM",
    price: "1 OMR",
    page: "SKINCARE.html#blackspot-corrector-vanishing-serum",
    section: "SERUM"
  },
  {
    name: "CAROTONE CLARIFYING SERUM",
    price: "1 OMR",
    page: "SKINCARE.html#carotone-clarifying-serum",
    section: "SERUM"
  },
  {
    name: "KOJIC ACID SHOWER GEL",
    price: "1.9 OMR",
    page: "SKINCARE.html#kojicacid-showergel",
    section: "GEL"
  },
  {
    name: "KOJIC ACID SUNBLOCK CREAM",
    price: "1.9 OMR",
    page: "SKINCARE.html#kojicacid-sunblockcream",
    section: "SUNSCREEN"
  },
  {
    name: "CREATIONS SPA ESSENTIALS MASSAGE RUB",
    price: "2.6 OMR",
    page: "SKINCARE.html#creatingspaessentials-massagerub",
    section: "SCRUB & RUB"
  },
  {
    name: "KOJIC ACID FACE & BODY SCRUB",
    price: "1.9 OMR",
    page: "SKINCARE.html#kojicacid-face&body-scrub",
    section: "SCRUB & RUB"
  },
  {
    name: "AR NIACINAMIDE 5% COLLAGEN BODY SCRUB",
    price: "3.9 OMR",
    page: "SKINCARE.html#ar-niacinamide-5%collagen-bodyscrub",
    section: "SCRUB & RUB"
  },
  {
    name: "PRETTY 5 IN 1 EXFOLIATING FACE & BODY SCRUB",
    price: "1.8 OMR",
    page: "SKINCARE.html#pretty-5in1-exfoliating-face&bodyscrub",
    section: "SCRUB & RUB"
  },
  {
    name: "JOJI SILKY SALT SCRUB STRAWBERRY & HONEY",
    price: "1.2 OMR",
    page: "SKINCARE.html#joji-silky-saltscrub-strawberry&honey",
    section: "SCRUB & RUB"
  },
  {
    name: "JOJI SILKY SALT SCRUB GLUTATHIONE & PEACH",
    price: "1.2 OMR",
    page: "SKINCARE.html#joji-silky-saltscrub-glutathione&peach",
    section: "SCRUB & RUB"
  },
  {
    name: "JOJI SILKY SALT SCRUB ORANGE & LEMON",
    price: "1.2 OMR",
    page: "SKINCARE.html#joji-silky-saltscrub-orange&lemon",
    section: "SCRUB & RUB"
  },
  {
    name: "JOJI SILKY SALT SCRUB ALOE VERA & AVOCADO",
    price: "1.2 OMR",
    page: "SKINCARE.html#joji-silky-saltscrub-aloevera&avocado",
    section: "SCRUB & RUB"
  },
  {
    name: "JOJI SILKY SALT SCRUB MELON & PINEAPPLE",
    price: "1.2 OMR",
    page: "SKINCARE.html#joji-silky-saltscrub-melon&pineapple",
    section: "SCRUB & RUB"
  },
  {
    name: "JOJI VITAMIN C SPA SALT SCRUB",
    price: "1.2 OMR",
    page: "SKINCARE.html#joji-vitaminc-spasalt-scrub",
    section: "SCRUB & RUB"
  },
  {
    name: "ALPHA ARBUTIN 3 PLUS COLLAGEN SALT SCRUB",
    price: "2.5 OMR",
    page: "SKINCARE.html#alpha-arbutin-3plus-collagen-salt-scrub",
    section: "SCRUB & RUB"
  },
  {
    name: "A BONNE SPA MILK SALT",
    price: "3 OMR",
    page: "SKINCARE.html#abonne-spa-milk-salt",
    section: "SCRUB & RUB"
  },
  {
    name: "CAROTONE CLARIFYING CREAM W/ SUN PROTECTION",
    price: "1.8 OMR",
    page: "SKINCARE.html#carotone-clarifying-cream",
    section: "CREAM"
  },
  {
    name: "CAROTONE GLOWING COLLAGEN CREAM",
    price: "800 BAIZA",
    page: "SKINCARE.html#carotone-glowing-collagen-cream",
    section: "CREAM"
  },
  {
    name: "MENA FACIAL CREAM",
    price: "600 BAIZA",
    page: "SKINCARE.html#mena-facial-cream",
    section: "CREAM"
  },
  {
    name: "GOREE GOLD CREAM",
    price: "2.5 OMR",
    page: "SKINCARE.html#goree-gold-cream",
    section: "CREAM"
  },
  {
    name: "MALIKA BEAUTY CREAM",
    price: "1.5 OMR",
    page: "SKINCARE.html#malika-beauty-cream",
    section: "CREAM"
  },
  {
    name: "EVETINE ANTI MARKS BEAUTY CREAM",
    price: "800 BAIZA",
    page: "SKINCARE.html#evetine-antimarks-beautycream",
    section: "CREAM"
  },
  {
    name: "GOREE BEAUTY CREAM",
    price: "1.2 OMR",
    page: "SKINCARE.html#goree-beauty-cream",
    section: "CREAM"
  },
  {
    name: "DR. BASHAR COLLAGEN BEAUTY CREAM",
    price: "800 BAIZA",
    page: "SKINCARE.html#dr.bashar-collagen-beautycream",
    section: "CREAM"
  },
  {
    name: "CASRI GLUTA COLLAGEN PINK CREAM",
    price: "800 BAIZA",
    page: "SKINCARE.html#casri-glutacollagen-pinkcream",
    section: "CREAM"
  },
  {
    name: "CASRI GLUTA C BEAUTY CREAM",
    price: "800 BAIZA",
    page: "SKINCARE.html#casri-glutac-beautycream",
    section: "CREAM"
  },
  {
    name: "KOJIC ACID SKIN LIGHTENING CREAM",
    price: "1.9 OMR",
    page: "SKINCARE.html#kojicacid-skinlightening-cream",
    section: "CREAM"
  },
  {
    name: "PAPA FEEL 5D PEPTIDE ANTIAGING EYE REPAIR CREAM",
    price: "6.5 OMR",
    page: "SKINCARE.html#papafeel-5dpeptide-antiaging-eyerepair-cream",
    section: "CREAM"
  },
  {
    name: "ABUTINE 3C3 WHITENING FACE CREAM",
    price: "3.9 OMR",
    page: "SKINCARE.html#abutine-3c3-whitening-facecream",
    section: "CREAM"
  },
  {
    name: "SO-EN PANTY",
    price: "2.5 OMR - 3 pieces",
    page: "SKINCARE.html#so-en-panty",
    section: "CLOTHES"
  },
  {
    name: "HISAMITSU SALONPAS MEDICATED PATCHES",
    price: "1 OMR",
    page: "SKINCARE.html#hisamitsu-salonpas-medicated-patches",
    section: "TREATMENT"
  },
];