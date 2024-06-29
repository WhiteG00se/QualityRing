<html>
<details>
  <summary>How to install</summary>
  <ul>
    <li>Download this repo and add the files to "[...]\Steam\steamapps\common\ELDEN RING\Game"</li>
    <li>
      <table>
        <tr>
          <th>Windows</th>
        </tr>
        <tr>
          <td>always start the game with "[...]\ELDEN RING\Game\ModEngine-2.1.0.0-win64\launchmod_eldenring.bat"</td>
        </tr>
      </table>
    </li>
    <li>
      <table>
        <tr>
          <th>Steam Deck</th>
          <th></th>
        </tr>
        <tr>
          <td>set launch options, then start via steam</td>
          <td>echo "%command%" | sed 's/start_protected_game/eldenring/' | WINEDLLOVERRIDES="dinput8.dll=n,b" sh</td>
        </tr>
      </table>
    </li>
  </ul>
</details>
<details>
  <summary>3rd party mods included in my bundle</summary>
  <ul>
    <li><a href="https://www.nexusmods.com/eldenring/mods/117">Elden Mod Loader</a></li>
    <li><a href="https://github.com/soulsmods/ModEngine2/releases">ModEngine2 for Windows</a></li>
    <li><a href="https://github.com/Cloudef/ModEngine2/releases">ModEngine2 for Proton</a></li>
    <li><a href="https://www.nexusmods.com/eldenring/mods/175">Remove black bars</a></li>
    <li><a href="https://www.nexusmods.com/eldenring/mods/216">Unlock the framerate</a></li>
    <li><a href="https://www.nexusmods.com/eldenring/mods/3091">Map for Goblins</a></li>
  </ul>
</details>
<details>
  <summary>Tools and info used</summary>
  <ul>
    <li>.dll files go into "[...]\ELDEN RING\Game\mods" </li>
    <li>gamefile overwrites go into "[...]\ELDEN RING\Game\mod" (SteamDeck) and "[...]\ELDEN
      RING\Game\ModEngine-2.1.0.0-win64\mod" (Windows) </li>
    <li><a href="https://www.youtube.com/watch?v=8wSfX3cKN44">Elden Ring Mods on Steam Deck (Tutorial)</a></li>
    <li>My own changes are in the \src\ folder</li>
    <li><a href="https://github.com/Nordgaren/UXM-Selective-Unpack">UXM-Selective-Unpack</a></li>
    <li><a href="https://github.com/soulsmods/DSMapStudio">DSMapStudio</a></li>
  </ul>
</details>

</html>
