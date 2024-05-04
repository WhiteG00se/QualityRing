<html>
<details> <!-- How to use -->
  <summary>How to use</summary>
  <ul>
    <li>Download this repo and add the files to "[...]\Steam\steamapps\common\ELDEN RING\Game"</li>
    <li>On Windows: start "[...]\ELDEN RING\Game\ModEngine-2.1.0.0-win64\launchmod_eldenring.bat"</li>
    <li>On Steam Deck: set launch options to<BR>
      <pre><code>
          echo "%command%" | sed 's/start_protected_game/eldenring/' | WINEDLLOVERRIDES="dinput8.dll=n,b" sh
        </code></pre>
    </li>
  </ul>
</details>
<details> <!-- 3rd party mods included in our bundle -->
  <summary>3rd party mods included in my bundle</summary>
  <ul>
    <li><a href="https://www.nexusmods.com/eldenring/mods/117">Elden Mod Loader</a></li>
    <li><a href="https://github.com/soulsmods/ModEngine2/releases">ModEngine2 for Windows</a></li>
    <li><a href="https://github.com/Cloudef/ModEngine2/releases">ModEngine2 for Proton</a></li>
    <li><a href="https://www.nexusmods.com/eldenring/mods/501">Faster Respawn</a></li>
    <li><a href="https://www.nexusmods.com/eldenring/mods/175">Remove black bars</a></li>
    <li><a href="https://www.nexusmods.com/eldenring/mods/216">Unlock the framerate</a></li>
    <li><a href="https://www.nexusmods.com/eldenring/mods/3091">Map for Goblins</a></li>
  </ul>
</details>
<details> <!-- My own changes -->
  <summary>My own changes</summary>
  <ul>
    <li>shopLineupParam.csv<BR>
      <pre><code>
          ID,Name,equipId,value,mtrlId,eventFlag_forStock,eventFlag_forRelease,sellQuantity,pad3,equipType,costType,pad1,setNum,value_Add,value_Magnification,iconId,nameMsgId,menuTitleMsgId,menuIconId,pad2,
          101882,[Twin Maiden Husks] Ancient Dragon Smithing
          Stone,10140,5000,-1,60280,0,-1,0,3,0,0,1,0,1,-1,-1,-1,-1,[0|0]
          101883,[Twin Maiden Husks] Somber Ancient Dragon Smithing
          Stone,10168,30000,-1,60280,0,-1,0,3,0,0,1,0,1,-1,-1,-1,-1,[0|0]
          101884,[Twin Maiden Husks] Larval Tear,8185,100,-1,60280,0,-1,0,3,0,0,1,0,1,-1,-1,-1,-1,[0|0]
          101885,[Twin Maiden Husks] Silver-Pickled Fowl Foot,1190,300,-1,60280,0,-1,0,3,0,0,1,0,1,-1,-1,-1,-1,[0|0]
          101886,[Twin Maiden Husks] Great Grave Glovewort,10909,10000,-1,60280,0,-1,0,3,0,0,1,0,1,-1,-1,-1,-1,[0|0]
          101887,[Twin Maiden Husks] Great Ghost Glovewort,10919,15000,-1,60280,0,-1,0,3,0,0,1,0,1,-1,-1,-1,-1,[0|0]
        </code></pre>
    </li>
  </ul>
</details>
<details> <!-- Tools and info used to create our mods -->
  <summary>Tools and info used to create our mods</summary>
  <ul>
    <li>.dll files go into "[...]\ELDEN RING\Game\mods" </li>
    <li>gamefile overwrites go into "[...]\ELDEN RING\Game\mod" (SteamDeck) and "[...]\ELDEN
      RING\Game\ModEngine-2.1.0.0-win64\mod" (Windows) </li>
    <li><a href="https://www.youtube.com/watch?v=8wSfX3cKN44">Elden Ring Mods on Steam Deck (Tutorial)o</a></li>
  </ul>
</details>