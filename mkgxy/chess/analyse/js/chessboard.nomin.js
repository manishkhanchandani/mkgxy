function Chessboard(d, g, k) {
    if (!g || !A(g)) {
        if (g) {
            alert("FEN isn't valid. Taking regular initial position now.")
        }
        g = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
        k = false
    }
    if (!$("#" + d)) {
        return false
    }
    var o = false;
    var n = "";
    var z = new Date().getTime();
    var C = d;
    var l = "_chessboard_";
    var u = false;
    var v = false;
    var a = false;
    var h = g.split(" ");
    var D = new Array("a", "b", "c", "d", "e", "f", "g", "h");
    var e = new Array(1, 2, 3, 4, 5, 6, 7, 8);
    var p = new Array();
    p.P = "&#9817;";
    p.R = "&#9814;";
    p.N = "&#9816;";
    p.B = "&#9815;";
    p.K = "&#9812;";
    p.Q = "&#9813;";
    p.p = "&#9823;";
    p.r = "&#9820;";
    p.n = "&#9822;";
    p.b = "&#9821;";
    p.k = "&#9818;";
    p.q = "&#9819;";
    p[" "] = "";
    var w = new Array();
    w["9817"] = "P";
    w["9814"] = "R";
    w["9816"] = "N";
    w["9815"] = "B";
    w["9812"] = "K";
    w["9813"] = "Q";
    w["9823"] = "p";
    w["9820"] = "r";
    w["9822"] = "n";
    w["9821"] = "b";
    w["9818"] = "k";
    w["9819"] = "q";
    var r = false;
    var f = new Array();
    var c = new Array();
    var F = new Array();
    var H = new Array();
    this.Create = function() {
        var J = false;
        var M = "";
        M = M + '<div id="' + C + l + 'dropper" class="chessboard_dropper chessboard_piece"></div>';
        M = M + '<div class="chessboard_border">';
        M = M + '<div class="chessboard_cols">';
        for (var L = 0; L <= 7; L++) {
            M = M + '<div class="' + C + l + D[L] + '" >' + D[L] + "</div>"
        }
        M = M + "</div>";
        M = M + '<div class="chessboard_ranks">';
        for (L = 7; L >= 0; L--) {
            M = M + '<div class="' + C + l + e[L] + '">' + e[L] + "</div>"
        }
        M = M + "</div>";
        M = M + '<div class="chessboard_board">';
        for (L = 7; L >= 0; L--) {
            for (var K = 0; K <= 7; K++) {
                J = ((L + K) % 2 == 0) ? "chessboard_darksquare" : "chessboard_lightsquare";
                M = M + '<div class="chessboard_square chessboard_piece ' + C + l + "target " + J + '" id="' + C + l + D[K] + e[L] + '"></div>'
            }
        }
        M = M + "</div>";
        M = M + '<div class="chessboard_ranks">';
        for (L = 7; L >= 0; L--) {
            M = M + '<div class="' + C + l + e[L] + '">' + e[L] + "</div>"
        }
        M = M + "</div>";
        M = M + '<div class="chessboard_cols">';
        for (L = 0; L <= 7; L++) {
            M = M + '<div class="' + C + l + D[L] + '">' + D[L] + "</div>"
        }
        M = M + "</div>";
        M = M + "</div>";
        M = M + '<div class="chessboard_panel"><div id="' + C + l + 'color" class="chessboard_color chessboard_white chessboard_right"></div><div id="' + C + l + 'move" class="chessboard_move chessboard_left"></div><button id="' + C + l + 'start" class="chessboard_start chessboard_clear chessboard_left">&lt;&lt;</button><button id="' + C + l + 'back" class="chessboard_back chessboard_left">&lt;</button><button id="' + C + l + 'forward" class="chessboard_forward chessboard_left">&gt;</button><button id="' + C + l + 'end" class="chessboard_end chessboard_left">&gt;&gt;</button><button id="' + C + l + 'flip" class="chessboard_flip chessboard_left">Flip</button><select id="' + C + l + 'promote" class="chessboard_promote chessboard_right"><option value="Q">Promote to queen&nbsp;</option><option value="R">Promote to rook&nbsp;</option><option value="N">Promote to knight&nbsp;</option><option value="B">Promote to bishop&nbsp;</option></select><fieldset class="chessboard_clear"><legend class="chessboard_legend">Movelist</legend><div id="' + C + l + 'movelist" class="chessboard_movelist"></div><div class="chessboard_highlight chessboard_right"><input id="' + C + l + 'highlight" type="checkbox" checked> Highlight moves</div></fieldset><fieldset class="chessboard_clear chessboard_fieldset"><legend class="chessboard_legend">FEN</legend><input id="' + C + l + 'fen" class="chessboard_fen chessboard_panel_maxwidth" type="text" value=""><button id="' + C + l + 'readfen" class="chessboard_readfen chessboard_right">Read</button></fieldset><fieldset class="chessboard_clear"><legend class="chessboard_legend">Permalink to this position</legend><input id="' + C + l + 'link" class="chessboard_link" type="text" value=""><button id="' + C + l + 'mail" class="chessboard_mail chessboard_right">Mail</button><button id="' + C + l + 'shorturl" class="chessboard_shorturl chessboard_right">Short URL</button></fieldset>';
        strHMTL = M + "</div>";
        $("#" + C).append(M);
        $("#" + C + l + "dropper").offset({
            top: $("#" + C + l + "a8").offset().top,
            left: $("#" + C + l + "a8").offset().left
        });
        $("#" + C + l + "dropper").draggable({
            start: function(N, O) {
                u = true;
                v = $("#" + a).attr("id");
                $("#" + a).html("")
            },
            stop: function(N, O) {
                if (u) {
                    $("#" + C + l + "dropper").offset({
                        top: $("#" + a).offset().top,
                        left: $("#" + a).offset().left
                    });
                    $("#" + a).html($("#" + C + l + "dropper").html());
                    u = false;
                    $("#" + C + l + "dropper").css("z-index", -1)
                }
            }
        });
        $("." + C + l + "target").droppable({
            drop: function(P, Q) {
                if (a != $(this).attr("id") && Q.draggable.attr("id") == C + l + "dropper") {
                    var S = "";
                    if (($(this).attr("id").replace(/^.*(..)$/, "$1").charAt(1) == "1" && $("#" + C + l + "dropper").html() == String.fromCharCode(9823)) || ($(this).attr("id").replace(/^.*(..)$/, "$1").charAt(1) == "8" && $("#" + C + l + "dropper").html() == String.fromCharCode(9817))) {
                        S = $("#" + C + l + "promote").val()
                    }
                    var O = q(f[r], v.replace(/^.*(..)$/, "$1") + $(this).attr("id").replace(/^.*(..)$/, "$1") + S);
                    if (O) {
                        var N = v.replace(/^.*(..)$/, "$1") + $(this).attr("id").replace(/^.*(..)$/, "$1") + S;
                        var R = B(f[r], N);
                        y(O, R, N);
                        r++;
                        x()
                    }
                    u = false;
                    E()
                }
            }
        });
        $("." + C + l + "target").mouseenter(function() {
            if (!u && $(this).text() != "") {
                a = $(this).attr("id");
                $("#" + C + l + "dropper").text($(this).text());
                $("#" + C + l + "dropper").offset({
                    top: $(this).offset().top,
                    left: $(this).offset().left
                });
                $("#" + C + l + "dropper").css("z-index", 99)
            }
        });
        $("#" + C + l + "dropper").mousedown(function() {
            $(this).css("cursor", "move")
        }).mouseup(function() {
            $(this).css("cursor", "pointer")
        });
        $("#" + C + l + "start").click(function() {
            t(-999)
        });
        $("#" + C + l + "back").click(function() {
            t(-1)
        });
        $("#" + C + l + "forward").click(function() {
            t(1)
        });
        $("#" + C + l + "end").click(function() {
            t(999)
        });
        $("#" + C + l + "flip").click(function() {
            s()
        });
        $("." + C + l + "halfmove").live("click", function() {
            var N = $(this).attr("id").replace(/.*_([0-9]+)$/, "$1");
            G(N * 1)
        });
        $("#" + C + l + "readfen").click(function() {
            I($("#" + C + l + "fen").val())
        });
        $("#" + C + l + "analysis").click(function() {
            x()
        });
        $("#" + C + l + "mail").click(function() {
            window.location.href = "mailto:?subject=board position&body=" + encodeURIComponent($("#" + C + l + "link").val())
        });
        $("#" + C + l + "shorturl").click(function() {
            if (o) {
                o.abort()
            }
            o = $.ajax({
                type: "POST",
                url: "/rd/shorturl/",
                data: n,
                success: function(P) {
                    var N = window.location.href.split("/");
                    var O = N[2];
                    $("#" + C + l + "link").val("http://" + O + "/rd/" + P)
                }
            })
        });
        r = (h[1] == "w") ? (h[5] * 2) - 2 : (h[5] * 2) - 1;
        y(g, k);
        E()
    };

    function G(J) {
        if (typeof f[J] != "undefined") {
            r = J
        }
        E()
    }
    this.GotoMove = function(J) {
        if (typeof f[J] != "undefined") {
            r = J
        }
        E()
    };

    function t(J) {
        if (J == -999) {
            while (typeof f[r - 1] != "undefined") {
                r--
            }
        } else {
            if (J == 999) {
                while (typeof f[r + 1] != "undefined") {
                    r++
                }
            } else {
                if (J) {
                    if (typeof f[r + J] != "undefined") {
                        r = r + J
                    }
                }
            }
        }
        E();
        m(H[r])
    }
    this.GotoMove = function(J) {
        if (typeof f[J] != "undefined") {
            r = J
        }
        E();
        m(H[J])
    };

    function m(J) {
        if (J && b()) {
            var K = J[0] + J[1];
            var L = J[2] + J[3];
            $("#" + C + l + K).addClass("chessboard_markedsquare");
            $("#" + C + l + L).addClass("chessboard_markedsquare")
        }
    }
    this.PlayMove = function(K, M) {
        var J = q(f[r], K);
        var L = B(f[r], K);
        y(J, L, K);
        r++;
        E();
        m(K)
    };
    this.GetPosID = function() {
        return z
    };
    this.GetHistIndex = function() {
        return r++
    };

    function b() {
        return $("#" + C + l + "highlight").is(":checked")
    }

    function E() {
        if (!u) {
            var J = f[r].split(" ");
            var Q = f[r].replace(/\//g, "");
            Q = Q.replace(/1/g, " ");
            Q = Q.replace(/2/g, "  ");
            Q = Q.replace(/3/g, "   ");
            Q = Q.replace(/4/g, "    ");
            Q = Q.replace(/5/g, "     ");
            Q = Q.replace(/6/g, "      ");
            Q = Q.replace(/7/g, "       ");
            Q = Q.replace(/8/g, "        ");
            var P;
            for (var M = 7; M >= 0; M--) {
                for (var K = 0; K <= 7; K++) {
                    P = Q[(7 - M) * 8 + K];
                    $("#" + C + l + D[K] + e[M]).html(p[P]);
                    $("#" + C + l + D[K] + e[M]).removeClass("chessboard_markedsquare")
                }
            }
            $("#" + C + l + "dropper").html("");
            $("#" + C + l + "dropper").offset({
                top: $("#" + C + l + "a8").offset().top,
                left: $("#" + C + l + "a8").offset().left
            });
            $("#" + C + l + "dropper").css("z-index", -1);
            a = false;
            $("#" + C + l + "fen").val(f[r]);
            if (c[r] != "null") {
                var O = (J[1] != "w") ? J[5] : J[5] - 1;
                if (O != 0) {
                    O = (J[1] != "w") ? O + ". " : O + ". ... "
                } else {
                    O = ""
                }
                $("#" + C + l + "move").html(O + c[r])
            } else {
                $("#" + C + l + "move").html("Starting position")
            }
            M = 0;
            while (typeof F[r + M + 1] != "undefined") {
                M++
            }
            $("#" + C + l + "movelist").html(F[r + M]);
            var L = window.location.href.split("/");
            var N = L[2];
            var R = "fen=" + encodeURIComponent(f[r]);
            if (c[r] != "null") {
                R = R + "&lmove=" + encodeURIComponent(c[r])
            }
            n = R;
            z = new Date().getTime();
            $("#" + C + l + "link").val("http://" + N + "/?" + R);
            if (J[1] != "w") {
                $("#" + C + l + "color").removeClass("chessboard_mwhite").addClass("chessboard_mblack")
            } else {
                $("#" + C + l + "color").removeClass("chessboard_mblack").addClass("chessboard_mwhite")
            }
        }
    }

    function y(K, O, M) {
        if (A(K)) {
            var P = K.split(" ");
            var L = (P[1] == "w") ? (P[5] * 2) - 2 : (P[5] * 2) - 1;
            if (typeof f[L] != "undefined" && (f[L] != K || c[L] != O)) {
                var N = L + 1;
                while (typeof f[N] != "undefined") {
                    delete f[N];
                    delete c[N];
                    delete F[N];
                    delete H[N];
                    N++
                }
            }
            if (!O) {
                O = "null"
            }
            f[L] = K;
            c[L] = O;
            H[L] = M;
            var J = "";
            if (O != "null") {
                if (typeof F[L - 1] == "undefined") {
                    J = (P[1] != "w") ? (P[5]) + ". " : (P[5] - 1) + ". ... ";
                    J = J + O;
                    J = '<span id="' + C + l + "movelist_" + L + '" class="' + C + l + 'halfmove chessboard_halfmove">' + J + "</span> "
                } else {
                    J = (P[1] != "w") ? P[5] + ". " : " ";
                    J = J + O;
                    J = '<span id="' + C + l + "movelist_" + L + '" class="' + C + l + 'halfmove chessboard_halfmove">' + J + "</span> ";
                    J = F[L - 1] + " " + J
                }
            } else {
                if (P[1] != "w") {
                    J = (P[5]) + ". ..."
                }
            }
            F[L] = J
        }
    }
    this.isFlipped = function() {
        return ($("#" + C + l + "a1").offset().top < $("#" + C + l + "h8").offset().top)
    };

    function s() {
        if (!u) {
            var J;
            for (var L = 7; L >= 4; L--) {
                for (var K = 0; K <= 7; K++) {
                    J = $("#" + C + l + D[K] + e[L]).offset();
                    $("#" + C + l + D[K] + e[L]).offset({
                        top: $("#" + C + l + D[7 - K] + e[7 - L]).offset().top,
                        left: $("#" + C + l + D[7 - K] + e[7 - L]).offset().left
                    });
                    $("#" + C + l + D[7 - K] + e[7 - L]).offset(J)
                }
            }
            for (L = 7; L >= 4; L--) {
                J = $("." + C + l + e[L]).html();
                $("." + C + l + e[L]).html($("." + C + l + e[7 - L]).html());
                $("." + C + l + e[7 - L]).html(J);
                J = $("." + C + l + D[L]).html();
                $("." + C + l + D[L]).html($("." + C + l + D[7 - L]).html());
                $("." + C + l + D[7 - L]).html(J)
            }
            $("#" + C + l + "dropper").html("");
            $("#" + C + l + "dropper").offset({
                top: $("#" + C + l + "a8").offset().top,
                left: $("#" + C + l + "a8").offset().left
            });
            $("#" + C + l + "dropper").css("z-index", -1);
            a = false;
            objEngine.Refresh();
            objAnnotations.Update();
            objEditor.FlipBoard()
        }
    }
    this.LoadFen = function(J) {
        I(J)
    };

    function I(J) {
        if (A(J)) {
            arrNewFen = J.split(" ");
            r = false;
            f = new Array();
            c = new Array();
            F = new Array();
            y(J);
            r = (arrNewFen[1] == "w") ? (arrNewFen[5] * 2) - 2 : (arrNewFen[5] * 2) - 1;
            E()
        } else {
            console.log("Sorry, the FEN '"+J+"' you gave me isn't valid.")
        }
    }

    function x() {
        if (typeof f[r] != "undefined") {
            objEngine.Analyze();
            objAnnotations.Update()
        }
    }
    this.GetFen = function() {
        return f[r]
    };
    this.LoadGame = function(J) {
        J = J.split("|");
        r = J[1] * 1;
        f = J[2].split(";");
        c = J[3].split(";");
        F = J[4].split(";");
        E()
    };
    this.GetGame = function() {
        objDate = new Date();
        var J = new Array();
        J[0] = objDate.getTime();
        J[1] = r;
        J[2] = f.join(";");
        J[3] = c.join(";");
        J[4] = F.join(";");
        return J.join("|")
    };
    this.GetFenList = function() {
        var L = new Array();
        var K = 0;
        for (var J in f) {
            L[K] = f[J];
            K++
        }
        return L
    };
    this.CheckFen = function(J) {
        return A(J)
    };

    function A(K) {
        var Q = new Array("a", "b", "c", "d", "e", "f", "g", "h");
        var P = new Array(1, 2, 3, 4, 5, 6, 7, 8);
        var N = K.split(" ");
        eFen = N[0].replace(/8/g, "        ");
        eFen = eFen.replace(/7/g, "       ");
        eFen = eFen.replace(/6/g, "      ");
        eFen = eFen.replace(/5/g, "     ");
        eFen = eFen.replace(/4/g, "    ");
        eFen = eFen.replace(/3/g, "   ");
        eFen = eFen.replace(/2/g, "  ");
        eFen = eFen.replace(/1/g, " ");
        if (eFen.split("k").length != 2) {
            return false
        }
        if (eFen.split("K").length != 2) {
            return false
        }
        var O = eFen.split("/");
        if (O.length != 8) {
            return false
        }
        for (var M = 0; M <= 7; M++) {
            row = O[M];
            if (row != "" && !row.match(/[pbnrqkPBNRQK ]{8}/)) {
                return false
            }
            if (N[2].match(/k/) && M == 0 && row[4] + row[7] != "kr") {
                return false
            }
            if (N[2].match(/q/) && M == 0 && row[0] + row[4] != "rk") {
                return false
            }
            if (N[2].match(/K/) && M == 7 && row[4] + row[7] != "KR") {
                return false
            }
            if (N[2].match(/Q/) && M == 7 && row[0] + row[4] != "RK") {
                return false
            }
            if ((M == 0 || M == 7) && row.match(/[pP]+/)) {
                return false
            }
        }
        if (!N[1].match(/^(w|b)$/)) {
            return false
        }
        if (!N[2].match(/(K[Q]{0,1}[k]{0,1}[q]{0,1})|(Q[k]{0,1}[q]{0,1})|(k[q]{0,1})|q|\-/)) {
            return false
        }
        if (!N[3].match(/\-|((a|b|c|d|e|f|g|h)(3|6))/)) {
            return false
        }
        var J = N[3].charCodeAt(0) - 97;
        if (N[3].match(/(a|b|c|d|e|f|g|h)(3)/)) {
            if (N[1].match(/w/)) {
                return false
            }
            if (eFen[J + 36] + eFen[J + 45] + eFen[J + 54] != "P  ") {
                return false
            }
        }
        if (N[3].match(/(a|b|c|d|e|f|g|h)(6)/)) {
            if (N[1].match(/b/)) {
                return false
            }
            if (eFen[J + 9] + eFen[J + 18] + eFen[J + 27] != "  p") {
                return false
            }
        }
        if (N[4].toString().search(/^[0-9]+$/) != 0) {
            return false
        }
        if (N[5].toString().search(/^[0-9]+$/) != 0 || N[5] == 0) {
            return false
        }
        if (N[1] == "w") {
            var L = eFen.indexOf("k");
            nFen = K.replace(/ b /, " w ")
        } else {
            var L = eFen.indexOf("K");
            nFen = K.replace(/ w /, " b ")
        }
        for (M = 0; M <= 7; M++) {
            for (j = 0; j <= 7; j++) {
                if (q(nFen, Q[M] + "" + P[j] + "" + Q[L % 9] + "" + P[7 - Math.floor(L / 9)], true)) {
                    return false
                }
            }
        }
        return true
    }
    this.ConvertNotation = function(K, J) {
        return B(K, J)
    };

    function B(N, M) {
        var Q = new Array();
        Q.P = "&#9817;";
        Q.R = "&#9814;";
        Q.N = "&#9816;";
        Q.B = "&#9815;";
        Q.K = "&#9812;";
        Q.Q = "&#9813;";
        var T = "Q";
        if (M.length > 4) {
            T = M[4];
            M = M.substr(0, 4)
        }
        var O = N.split(" ");
        var X = O[5];
        var V = new Array("a", "b", "c", "d", "e", "f", "g", "h");
        var R = new Array(1, 2, 3, 4, 5, 6, 7, 8);
        eFen = N.replace(/\//g, "");
        eFen = eFen.substr(0, 64);
        eFen = eFen.replace(/1/g, " ");
        eFen = eFen.replace(/2/g, "  ");
        eFen = eFen.replace(/3/g, "   ");
        eFen = eFen.replace(/4/g, "    ");
        eFen = eFen.replace(/5/g, "     ");
        eFen = eFen.replace(/6/g, "      ");
        eFen = eFen.replace(/7/g, "       ");
        eFen = eFen.replace(/8/g, "        ");
        var P = new Array(M.charCodeAt(0) - 97, M.charAt(1) - 1);
        var S = new Array(M.charCodeAt(2) - 97, M.charAt(3) - 1);
        sKey = 8 * (7 - P[1]) + P[0];
        tKey = 8 * (7 - S[1]) + S[0];
        var K = N.match(/ w /) ? "w" : "b";
        var U = "";
        if (!eFen[sKey].match(/[pP]/)) {
            U = eFen[sKey].toUpperCase()
        }
        if (!eFen[sKey].match(/[kKpP]/)) {
            var L = new Array(0, 1, 1);
            for (i = 0; i <= 7; i++) {
                for (j = 0; j <= 7; j++) {
                    oKey = 8 * (7 - j) + i;
                    if (sKey != oKey && eFen[sKey] == eFen[oKey] && q(N, V[i] + "" + R[j] + "" + V[S[0]] + "" + R[S[1]], true)) {
                        L[0] = true;
                        if (i == P[0]) {
                            L[1] = L[2] & 0
                        }
                        if (j == P[1]) {
                            L[2] = L[2] & 0
                        }
                    }
                }
            }
            if (L[0] && L[1] == 1) {
                U = U + V[P[0]]
            } else {
                if (L[0] && L[2] == 1) {
                    U = U + R[P[1]]
                } else {
                    if (L[0]) {
                        U = U + V[P[0]] + R[P[1]]
                    }
                }
            }
        }
        if (eFen[tKey] != " " || (eFen[sKey].match(/[pP]/) && eFen[tKey] == " " && P[0] != S[0])) {
            U = U + "x";
            if (eFen[sKey].match(/[pP]/)) {
                U = V[P[0]] + U
            }
        }
        U = U + V[S[0]] + R[S[1]];
        if ((eFen[sKey] == "p" && S[1] == 0) || (eFen[sKey] == "P" && S[1] == 7)) {
            U = U + "=" + T.toUpperCase()
        }
        if (eFen[sKey].match(/[pP]/) && eFen[tKey] == " " && P[0] != S[0]) {
            U = U + "e.p."
        }
        if (Math.abs(P[0] - S[0]) == 2 && eFen[sKey].match(/[kK]/)) {
            if (S[0] == 2) {
                U = "O-O-O"
            } else {
                U = "O-O"
            }
        }
        nMove = q(N, M);
        if (nMove) {
            var J = "";
            if (K == "w") {
                var W = eFen.indexOf("k");
                nMove = nMove.replace(/ b /, " w ")
            } else {
                var W = eFen.indexOf("K");
                nMove = nMove.replace(/ w /, " b ")
            }
            for (i = 0; i <= 7; i++) {
                for (j = 0; j <= 7; j++) {
                    if (q(nMove, V[i] + "" + R[j] + "" + V[W % 8] + "" + R[7 - Math.floor(W / 8)], true)) {
                        J = "+"
                    }
                }
            }
            U = U + J
        }
        return U
    }
    this.GetNewFen = function(K, J) {
        return q(K, J)
    };

    function q(J, U, X) {
        var L = "Q";
        if (U.length > 4) {
            L = U[4];
            U = U.substr(0, 4)
        }
        var ay = J.split(" ");
        var R = S(ay[0]);
        var au = "";
        var ai = new Array(U.charCodeAt(0) - 97, U.charAt(1) - 1);
        var O = new Array(U.charCodeAt(2) - 97, U.charAt(3) - 1);
        var V = (ay[3] == "-") ? false : new Array(ay[3].charCodeAt(0) - 97, ay[3].charAt(1) - 1);
        var P = ay[2];
        var ad = ao(J);
        var W = 8 * (7 - ai[1]) + ai[0];
        var ab = R[W];
        var Y = ay[1];
        var ah = ay[4];
        var M = ay[5];
        var ag = R[8 * (7 - O[1]) + O[0]];
        if ((Y == "w" && "pnbrqk".match(ag)) || (Y == "b" && "PNBRQK".match(ag))) {
            ah = -1
        }
        var ac = false;
        if (ab == "P") {
            if (av(ad, ai, O, V, P, Y)) {
                ac = true
            }
        } else {
            if (ab == "p") {
                if (al(ad, ai, O, V, P, Y)) {
                    ac = true
                }
            } else {
                if (ab == "B") {
                    if (K(ad, ai, O, V, P, Y)) {
                        ac = true
                    }
                } else {
                    if (ab == "b") {
                        if (aw(ad, ai, O, V, P, Y)) {
                            ac = true
                        }
                    } else {
                        if (ab == "N") {
                            if (ax(ad, ai, O, V, P, Y)) {
                                ac = true
                            }
                        } else {
                            if (ab == "n") {
                                if (am(ad, ai, O, V, P, Y)) {
                                    ac = true
                                }
                            } else {
                                if (ab == "R") {
                                    if (ar(ad, ai, O, V, P, Y)) {
                                        ac = true
                                    }
                                } else {
                                    if (ab == "r") {
                                        if (aj(ad, ai, O, V, P, Y)) {
                                            ac = true
                                        }
                                    } else {
                                        if (ab == "Q") {
                                            if (at(ad, ai, O, V, P, Y)) {
                                                ac = true
                                            }
                                        } else {
                                            if (ab == "q") {
                                                if (ak(ad, ai, O, V, P, Y)) {
                                                    ac = true
                                                }
                                            } else {
                                                if (ab == "K") {
                                                    if (az(ad, ai, O, V, P, Y)) {
                                                        ac = true
                                                    }
                                                } else {
                                                    if (ab == "k") {
                                                        if (an(ad, ai, O, V, P, Y)) {
                                                            ac = true
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (X && ac) {
            return true
        } else {
            if (X && !ac) {
                return false
            }
        }
        if (ac) {
            var ap = "";
            var T = 8 * (7 - ai[1]) + ai[0];
            var af = 8 * (7 - O[1]) + O[0];
            R = aa(R, af, R[T]);
            R = aa(R, T, " ");
            if (V) {
                var Z = 8 * (7 - V[1]) + V[0];
                if ((Y == "b" && R[Z] == "p") || (Y == "w" && R[Z] == "P")) {
                    R = aa(R, Z + (O[1] - ai[1]) * 8, " ");
                    ah = -1
                }
            }
            if (R[af] == "p" || R[af] == "P") {
                ah = -1
            }
            if (O[1] == 7 && R[af] == "P") {
                R = aa(R, af, L.toUpperCase())
            }
            if (O[1] == 0 && R[af] == "p") {
                R = aa(R, af, L.toLowerCase())
            }
            if (P != "-") {
                if (R[af] == "k") {
                    P = P.replace(/[kq]+/, "")
                }
                if (R[af] == "K") {
                    P = P.replace(/[KQ]+/, "")
                }
                if (R[0] != "r") {
                    P = P.replace(/q/, "")
                }
                if (R[7] != "r") {
                    P = P.replace(/k/, "")
                }
                if (R[56] != "R") {
                    P = P.replace(/Q/, "")
                }
                if (R[63] != "R") {
                    P = P.replace(/K/, "")
                }
                if (P == "") {
                    P = "-"
                }
            }
            if (R[af] == "k" && O[0] == ai[0] - 2) {
                R = aa(R, 0, " ");
                R = aa(R, 3, "r");
                ap = ap + ",e8,d8"
            }
            if (R[af] == "k" && O[0] == ai[0] + 2) {
                R = aa(R, 7, " ");
                R = aa(R, 5, "r");
                ap = ap + ",e8,f8"
            }
            if (R[af] == "K" && O[0] == ai[0] - 2) {
                R = aa(R, 56, " ");
                R = aa(R, 59, "R");
                ap = ap + ",e1,d1"
            }
            if (R[af] == "K" && O[0] == ai[0] + 2) {
                R = aa(R, 63, " ");
                R = aa(R, 61, "R");
                ap = ap + ",e1,f1"
            }
            V = "-";
            if (ai[1] - O[1] == 2 && ab == "p") {
                V = String.fromCharCode(ai[0] + 97) + "6"
            }
            if (ai[1] - O[1] == -2 && ab == "P") {
                V = String.fromCharCode(ai[0] + 97) + "3"
            }
            if (Y == "w") {
                var Q = R.indexOf("K")
            } else {
                var Q = R.indexOf("k")
            }
            ap = (Q % 8) + "" + (7 - Math.floor(Q / 8)) + ap;
            Y = (Y == "b") ? "w" : "b";
            if (Y == "w") {
                M++
            }
            ah++;
            if (P == "") {
                P = "-"
            }
            au = N(R) + " " + Y + " " + P + " " + V + " " + ah + " " + M;
            ap = ap.split(",");
            for (var aq = 0; aq < ap.length; aq++) {
                if (ae(au, ap[aq])) {
                    return false
                }
            }
            return au
        } else {
            return false
        }

        function ae(aB, aA) {
            var aF = new Array("a", "b", "c", "d", "e", "f", "g", "h");
            var aE = new Array(1, 2, 3, 4, 5, 6, 7, 8);
            if (!isNaN(aA - 0)) {
                aA = aa(aA, 0, aF[aA[0]]);
                aA = aa(aA, 1, aE[aA[1]])
            }
            for (var aD = 0; aD <= 7; aD++) {
                for (var aC = 0; aC <= 7; aC++) {
                    if (q(aB, aF[aD] + "" + aE[aC] + "" + aA[0] + "" + aA[1], true)) {
                        return true
                    }
                }
            }
            return false
        }

        function aa(aC, aA, aB) {
            if (aA > aC.length - 1) {
                return aC
            }
            return aC.substr(0, aA) + aB + aC.substr(aA + 1)
        }

        function S(aA) {
            aA = aA.replace(/\//g, "");
            aA = aA.substr(0, 64);
            aA = aA.replace(/1/g, " ");
            aA = aA.replace(/2/g, "  ");
            aA = aA.replace(/3/g, "   ");
            aA = aA.replace(/4/g, "    ");
            aA = aA.replace(/5/g, "     ");
            aA = aA.replace(/6/g, "      ");
            aA = aA.replace(/7/g, "       ");
            aA = aA.replace(/8/g, "        ");
            return aA
        }

        function N(aA) {
            aA = aA.replace(/([a-zA-Z ]{8})/g, "$1/");
            aA = aA.substr(0, 71) + aA.substr(72);
            aA = aA.replace(/        /g, "8");
            aA = aA.replace(/       /g, "7");
            aA = aA.replace(/      /g, "6");
            aA = aA.replace(/     /g, "5");
            aA = aA.replace(/    /g, "4");
            aA = aA.replace(/   /g, "3");
            aA = aA.replace(/  /g, "2");
            aA = aA.replace(/ /g, "1");
            return aA
        }

        function ao(aB) {
            var aA = new Array();
            aA.P = 1;
            aA.B = 2;
            aA.N = 3;
            aA.R = 4;
            aA.Q = 5;
            aA.K = 6;
            aA.p = 101;
            aA.b = 102;
            aA.n = 103;
            aA.r = 104;
            aA.q = 105;
            aA.k = 106;
            aA[" "] = 100;
            aB = S(aB);
            var aF = new Array(new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array());
            var aE;
            for (var aD = 7; aD >= 0; aD--) {
                for (var aC = 0; aC <= 7; aC++) {
                    aE = aB[8 * (7 - aD) + aC];
                    aF[aC][aD] = aA[aE]
                }
            }
            return aF
        }

        function al(aF, aJ, aH, aI, aA, aG) {
            var aE = aJ[0];
            var aC = aJ[1];
            var aD = aH[0];
            var aB = aH[1];
            if (aG == "b" && aF[aE][aC] == 101 && aC > 0) {
                if (aF[aD][aB] == 100 && aC == aB + 1 && aE == aD) {
                    return true
                } else {
                    if (aC == 6 && aF[aD][aB] == 100 && aF[aE][aC - 1] == 100 && aE == aD && aC == aB + 2) {
                        return true
                    } else {
                        if (aF[aD][aB] < 100 && aC == aB + 1 && Math.abs(aE - aD) == 1) {
                            return true
                        } else {
                            if (aD == aI[0] && aB == aI[1] && aC == aB + 1 && Math.abs(aE - aD) == 1) {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        }

        function av(aF, aJ, aH, aI, aA, aG) {
            var aE = aJ[0];
            var aC = aJ[1];
            var aD = aH[0];
            var aB = aH[1];
            if (aG == "w" && aF[aE][aC] == 1 && aC < 7) {
                if (aF[aD][aB] == 100 && aC == aB - 1 && aE == aD) {
                    return true
                } else {
                    if (aC == 1 && aF[aD][aB] == 100 && aF[aE][aC + 1] == 100 && aE == aD && aC == aB - 2) {
                        return true
                    } else {
                        if (aF[aD][aB] > 100 && aC == aB - 1 && Math.abs(aE - aD) == 1) {
                            return true
                        } else {
                            if (aD == aI[0] && aB == aI[1] && aC == aB - 1 && Math.abs(aE - aD) == 1) {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        }

        function aw(aG, aK, aI, aJ, aA, aH) {
            var aF = aK[0];
            var aC = aK[1];
            var aD = aI[0];
            var aB = aI[1];
            var aE;
            if (aH == "b" && aG[aF][aC] == 102) {
                aE = 1;
                do {
                    if (aF + aE == aD && aC - aE == aB && aG[aF + aE][aC - aE] <= 100) {
                        return true
                    }
                    aE++
                } while (aF + aE <= 7 && aC - aE >= 0 && aG[aF + aE - 1][aC - aE + 1] == 100);
                aE = 1;
                do {
                    if (aF - aE == aD && aC - aE == aB && aG[aF - aE][aC - aE] <= 100) {
                        return true
                    }
                    aE++
                } while (aF - aE >= 0 && aC - aE >= 0 && aG[aF - aE + 1][aC - aE + 1] == 100);
                aE = 1;
                do {
                    if (aF - aE == aD && aC + aE == aB && aG[aF - aE][aC + aE] <= 100) {
                        return true
                    }
                    aE++
                } while (aF - aE >= 0 && aC + aE <= 7 && aG[aF - aE + 1][aC + aE - 1] == 100);
                aE = 1;
                do {
                    if (aF + aE == aD && aC + aE == aB && aG[aF + aE][aC + aE] <= 100) {
                        return true
                    }
                    aE++
                } while (aF + aE <= 7 && aC + aE <= 7 && aG[aF + aE - 1][aC + aE - 1] == 100)
            }
            return false
        }

        function K(aG, aK, aI, aJ, aA, aH) {
            var aF = aK[0];
            var aC = aK[1];
            var aD = aI[0];
            var aB = aI[1];
            var aE;
            if (aH == "w" && aG[aF][aC] == 2) {
                aE = 1;
                do {
                    if (aF + aE == aD && aC - aE == aB && aG[aF + aE][aC - aE] >= 100) {
                        return true
                    }
                    aE++
                } while (aF + aE <= 7 && aC - aE >= 0 && aG[aF + aE - 1][aC - aE + 1] == 100);
                aE = 1;
                do {
                    if (aF - aE == aD && aC - aE == aB && aG[aF - aE][aC - aE] >= 100) {
                        return true
                    }
                    aE++
                } while (aF - aE >= 0 && aC - aE >= 0 && aG[aF - aE + 1][aC - aE + 1] == 100);
                aE = 1;
                do {
                    if (aF - aE == aD && aC + aE == aB && aG[aF - aE][aC + aE] >= 100) {
                        return true
                    }
                    aE++
                } while (aF - aE >= 0 && aC + aE <= 7 && aG[aF - aE + 1][aC + aE - 1] == 100);
                aE = 1;
                do {
                    if (aF + aE == aD && aC + aE == aB && aG[aF + aE][aC + aE] >= 100) {
                        return true
                    }
                    aE++
                } while (aF + aE <= 7 && aC + aE <= 7 && aG[aF + aE - 1][aC + aE - 1] == 100)
            }
            return false
        }

        function aj(aG, aK, aI, aJ, aA, aH) {
            var aF = aK[0];
            var aC = aK[1];
            var aD = aI[0];
            var aB = aI[1];
            var aE;
            if (aH == "b" && aG[aF][aC] == 104) {
                aE = 1;
                do {
                    if (aC + aE == aB && aF == aD && aG[aF][aC + aE] <= 100) {
                        return true
                    }
                    aE++
                } while (aC + aE <= 7 && aG[aF][aC + aE - 1] == 100);
                aE = 1;
                do {
                    if (aC - aE == aB && aF == aD && aG[aF][aC - aE] <= 100) {
                        return true
                    }
                    aE++
                } while (aC - aE >= 0 && aG[aF][aC - aE + 1] == 100);
                aE = 1;
                do {
                    if (aF - aE == aD && aC == aB && aG[aF - aE][aC] <= 100) {
                        return true
                    }
                    aE++
                } while (aF - aE >= 0 && aG[aF - aE + 1][aC] == 100);
                aE = 1;
                do {
                    if (aF + aE == aD && aC == aB && aG[aF + aE][aC] <= 100) {
                        return true
                    }
                    aE++
                } while (aF + aE <= 7 && aG[aF + aE - 1][aC] == 100)
            }
            return false
        }

        function ar(aG, aK, aI, aJ, aA, aH) {
            var aF = aK[0];
            var aC = aK[1];
            var aD = aI[0];
            var aB = aI[1];
            var aE;
            if (aH == "w" && aG[aF][aC] == 4) {
                aE = 1;
                do {
                    if (aC + aE == aB && aF == aD && aG[aF][aC + aE] >= 100) {
                        return true
                    }
                    aE++
                } while (aC + aE <= 7 && aG[aF][aC + aE - 1] == 100);
                aE = 1;
                do {
                    if (aC - aE == aB && aF == aD && aG[aF][aC - aE] >= 100) {
                        return true
                    }
                    aE++
                } while (aC - aE >= 0 && aG[aF][aC - aE + 1] == 100);
                aE = 1;
                do {
                    if (aF - aE == aD && aC == aB && aG[aF - aE][aC] >= 100) {
                        return true
                    }
                    aE++
                } while (aF - aE >= 0 && aG[aF - aE + 1][aC] == 100);
                aE = 1;
                do {
                    if (aF + aE == aD && aC == aB && aG[aF + aE][aC] >= 100) {
                        return true
                    }
                    aE++
                } while (aF + aE <= 7 && aG[aF + aE - 1][aC] == 100)
            }
            return false
        }

        function ak(aG, aK, aI, aJ, aA, aH) {
            var aF = aK[0];
            var aC = aK[1];
            var aD = aI[0];
            var aB = aI[1];
            var aE;
            if (aH == "b" && aG[aF][aC] == 105) {
                aE = 1;
                do {
                    if (aC + aE == aB && aF == aD && aG[aF][aC + aE] <= 100) {
                        return true
                    }
                    aE++
                } while (aC + aE <= 7 && aG[aF][aC + aE - 1] == 100);
                aE = 1;
                do {
                    if (aC - aE == aB && aF == aD && aG[aF][aC - aE] <= 100) {
                        return true
                    }
                    aE++
                } while (aC - aE >= 0 && aG[aF][aC - aE + 1] == 100);
                aE = 1;
                do {
                    if (aF - aE == aD && aC == aB && aG[aF - aE][aC] <= 100) {
                        return true
                    }
                    aE++
                } while (aF - aE >= 0 && aG[aF - aE + 1][aC] == 100);
                aE = 1;
                do {
                    if (aF + aE == aD && aC == aB && aG[aF + aE][aC] <= 100) {
                        return true
                    }
                    aE++
                } while (aF + aE <= 7 && aG[aF + aE - 1][aC] == 100);
                aE = 1;
                do {
                    if (aF + aE == aD && aC - aE == aB && aG[aF + aE][aC - aE] <= 100) {
                        return true
                    }
                    aE++
                } while (aF + aE <= 7 && aC - aE >= 0 && aG[aF + aE - 1][aC - aE + 1] == 100);
                aE = 1;
                do {
                    if (aF - aE == aD && aC - aE == aB && aG[aF - aE][aC - aE] <= 100) {
                        return true
                    }
                    aE++
                } while (aF - aE >= 0 && aC - aE >= 0 && aG[aF - aE + 1][aC - aE + 1] == 100);
                aE = 1;
                do {
                    if (aF - aE == aD && aC + aE == aB && aG[aF - aE][aC + aE] <= 100) {
                        return true
                    }
                    aE++
                } while (aF - aE >= 0 && aC + aE <= 7 && aG[aF - aE + 1][aC + aE - 1] == 100);
                aE = 1;
                do {
                    if (aF + aE == aD && aC + aE == aB && aG[aF + aE][aC + aE] <= 100) {
                        return true
                    }
                    aE++
                } while (aF + aE <= 7 && aC + aE <= 7 && aG[aF + aE - 1][aC + aE - 1] == 100)
            }
            return false
        }

        function at(aG, aK, aI, aJ, aA, aH) {
            var aF = aK[0];
            var aC = aK[1];
            var aD = aI[0];
            var aB = aI[1];
            var aE;
            if (aH == "w" && aG[aF][aC] == 5) {
                aE = 1;
                do {
                    if (aC + aE == aB && aF == aD && aG[aF][aC + aE] >= 100) {
                        return true
                    }
                    aE++
                } while (aC + aE <= 7 && aG[aF][aC + aE - 1] == 100);
                aE = 1;
                do {
                    if (aC - aE == aB && aF == aD && aG[aF][aC - aE] >= 100) {
                        return true
                    }
                    aE++
                } while (aC - aE >= 0 && aG[aF][aC - aE + 1] == 100);
                aE = 1;
                do {
                    if (aF - aE == aD && aC == aB && aG[aF - aE][aC] >= 100) {
                        return true
                    }
                    aE++
                } while (aF - aE >= 0 && aG[aF - aE + 1][aC] == 100);
                aE = 1;
                do {
                    if (aF + aE == aD && aC == aB && aG[aF + aE][aC] >= 100) {
                        return true
                    }
                    aE++
                } while (aF + aE <= 7 && aG[aF + aE - 1][aC] == 100);
                aE = 1;
                do {
                    if (aF + aE == aD && aC - aE == aB && aG[aF + aE][aC - aE] >= 100) {
                        return true
                    }
                    aE++
                } while (aF + aE <= 7 && aC - aE >= 0 && aG[aF + aE - 1][aC - aE + 1] == 100);
                aE = 1;
                do {
                    if (aF - aE == aD && aC - aE == aB && aG[aF - aE][aC - aE] >= 100) {
                        return true
                    }
                    aE++
                } while (aF - aE >= 0 && aC - aE >= 0 && aG[aF - aE + 1][aC - aE + 1] == 100);
                aE = 1;
                do {
                    if (aF - aE == aD && aC + aE == aB && aG[aF - aE][aC + aE] >= 100) {
                        return true
                    }
                    aE++
                } while (aF - aE >= 0 && aC + aE <= 7 && aG[aF - aE + 1][aC + aE - 1] == 100);
                aE = 1;
                do {
                    if (aF + aE == aD && aC + aE == aB && aG[aF + aE][aC + aE] >= 100) {
                        return true
                    }
                    aE++
                } while (aF + aE <= 7 && aC + aE <= 7 && aG[aF + aE - 1][aC + aE - 1] == 100)
            }
            return false
        }

        function am(aH, aM, aJ, aL, aA, aI) {
            var aG = aM[0];
            var aC = aM[1];
            var aE = aJ[0];
            var aB = aJ[1];
            var aK = new Array(-1, -2, 1, 2);
            if (aI == "b" && aH[aG][aC] == 103) {
                for (var aF = -2; aF <= 2; aF++) {
                    for (var aD = -2; aD <= 2; aD++) {
                        if (aF != 0 && aD != 0 && (Math.abs(aF) != Math.abs(aD)) && aG + aF == aE && aC + aD == aB && aH[aG + aF][aC + aD] <= 100) {
                            return true
                        }
                    }
                }
            }
            return false
        }

        function ax(aH, aM, aJ, aL, aA, aI) {
            var aG = aM[0];
            var aC = aM[1];
            var aE = aJ[0];
            var aB = aJ[1];
            var aK = new Array(-1, -2, 1, 2);
            if (aI == "w" && aH[aG][aC] == 3) {
                for (var aF = -2; aF <= 2; aF++) {
                    for (var aD = -2; aD <= 2; aD++) {
                        if (aF != 0 && aD != 0 && (Math.abs(aF) != Math.abs(aD)) && aG + aF == aE && aC + aD == aB && aH[aG + aF][aC + aD] >= 100) {
                            return true
                        }
                    }
                }
            }
            return false
        }

        function an(aF, aJ, aH, aI, aA, aG) {
            var aE = aJ[0];
            var aC = aJ[1];
            var aD = aH[0];
            var aB = aH[1];
            if (aG == "b" && aF[aE][aC] == 106) {
                if (Math.abs(aE - aD) <= 1 && Math.abs(aC - aB) <= 1 && (aE != aD || aC != aB) && aF[aD][aB] <= 100) {
                    return true
                }
                if (aE == 4 && aC == 7 && aD == 6 && aB == 7 && aF[5][7] == 100 && aF[6][7] == 100 && aF[7][7] == 104 && aA.match(/k/)) {
                    return true
                }
                if (aE == 4 && aC == 7 && aD == 2 && aB == 7 && aF[3][7] == 100 && aF[2][7] == 100 && aF[1][7] == 100 && aF[0][7] == 104 && aA.match(/q/)) {
                    return true
                }
            }
            return false
        }

        function az(aF, aJ, aH, aI, aA, aG) {
            var aE = aJ[0];
            var aC = aJ[1];
            var aD = aH[0];
            var aB = aH[1];
            if (aG == "w" && aF[aE][aC] == 6) {
                if (Math.abs(aE - aD) <= 1 && Math.abs(aC - aB) <= 1 && (aE != aD || aC != aB) && aF[aD][aB] >= 100) {
                    return true
                }
                if (aE == 4 && aC == 0 && aD == 6 && aB == 0 && aF[5][0] == 100 && aF[6][0] == 100 && aF[7][0] == 4 && aA.match(/K/)) {
                    return true
                }
                if (aE == 4 && aC == 0 && aD == 2 && aB == 0 && aF[3][0] == 100 && aF[2][0] == 100 && aF[1][0] == 100 && aF[0][0] == 4 && aA.match(/Q/)) {
                    return true
                }
            }
            return false
        }
    }
};