function Wcc(c) {
    if (!$("#" + c)) {
        return false
    }
    var b = c;
    var a = "_wcc_";
    this.Create = function() {
        strHTML = '<div class="wcc_panel">';
        strHTML = strHTML + "<fieldset><legend>WCC 2014</legend><ul>";
        strHTML = strHTML + '<li>Game 1: Anandâ€“Carlsen, Â½â€“Â½, Nov 8th <button id="wcc_wcc_loadgame_1" class="wcc_wcc_load" onClick="objMainboard.LoadGame(wccgame1);">Load</button>';
        strHTML = strHTML + '<li>Game 2: Carlsen-Anand, 1-0, Nov 9th <button id="wcc_wcc_loadgame_2" class="wcc_wcc_load" onClick="objMainboard.LoadGame(wccgame2);">Load</button>';
        strHTML = strHTML + '<li>Game 3: Anandâ€“Carlsen, 1â€“0, Nov 11th <button id="wcc_wcc_loadgame_3" class="wcc_wcc_load" onClick="objMainboard.LoadGame(wccgame3);">Load</button>';
        strHTML = strHTML + '<li>Game 4: Carlsenâ€“Anand, Â½â€“Â½, Nov 12th <button id="wcc_wcc_loadgame_4" class="wcc_wcc_load" onClick="objMainboard.LoadGame(wccgame4);">Load</button>';
        strHTML = strHTML + '<li>Game 5: Anandâ€“Carlsen, Â½â€“Â½, Nov 14th <button id="wcc_wcc_loadgame_5" class="wcc_wcc_load" onClick="objMainboard.LoadGame(wccgame5);">Load</button>';
        strHTML = strHTML + '<li>Game 6: Carlsenâ€“Anand, 1â€“0, Nov 15th <button id="wcc_wcc_loadgame_6" class="wcc_wcc_load" onClick="objMainboard.LoadGame(wccgame6);">Load</button>';
        strHTML = strHTML + "</ul></fieldset>";
        strHTML = strHTML + "</div>";
        $("#" + b).append(strHTML)
    }
};