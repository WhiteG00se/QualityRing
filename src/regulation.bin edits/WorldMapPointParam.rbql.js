SELECT * WHERE 
    !(a.ID >=  2600 && a.ID <  3500) && /* Cookbooks */
    !(a.ID >=  3700 && a.ID <  4000) && /* Cracked/Ritual Pots & Perfume Bottles */
    !(a.ID >=  4100 && a.ID <  4200) && /* Larval Tears */
    !(a.ID >=  4200 && a.ID <  4300) && /* Celestial Dews */
    !(a.ID >=  5200 && a.ID <  6900) && /* Smithing Stones */
    !(a.ID >=  6900 && a.ID <  8900) && /* Somber Stones */
    !(a.ID >= 17000 && a.ID < 17200) && /* Rune Arcs */
    !(a.ID >= 17400 && a.ID < 21400) && /* Runes (e.g. Golden Runes [1]) */
    !(a.ID >= 21400 && a.ID < 21800) && /* Throwables */
    !(a.ID >= 21800 && a.ID < 22200) && /* Greases */
    !(a.ID >= 22200 && a.ID < 22600) && /* Other Consumable Buffs */
    !(a.ID >= 22600 && a.ID < 23000) && /* Boluses and Soap */
    !(a.ID >= 23000 && a.ID < 23400) && /* Other Consumables */
    !(a.ID >= 23400 && a.ID < 24200) && /* Ammunition */
    !(a.ID >= 24200 && a.ID < 25000) && /* Materials */
    !(a.ID >= 24200 && a.ID < 25000) /* Multiplayer Items */