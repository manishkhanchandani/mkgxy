
var args    = lozGetURLArgs();
var uiBoard = null;
var engine  = null;
var chess     = null;

lozData.page    = pageURL;
lozData.idInfo  = '#info';
lozData.idStats = '#stats';

//{{{  updateBoardFromFen


function updateBoardFromFen () {
  var fen = $('#fen').val();//var fen = $('#fen').val().trim();
  uiBoard.position(fen);
};

//}}}
//{{{  updateFenFromBoard

function updateFenFromBoard () {
  var turn = lozDecodeFEN($('#fen').val()).turn;
  var fen = uiBoard.fen();
  var pos = uiBoard.position();
  var rights = '';
  if (pos.e1 == 'wK' && pos.h1 == 'wR')
    rights += 'K';
  if (pos.e1 == 'wK' && pos.a1 == 'wR')
    rights += 'Q';
  if (pos.e8 == 'bK' && pos.h8 == 'bR')
    rights += 'k';
  if (pos.e8 == 'bK' && pos.h8 == 'bR')
    rights += 'q';
  if (!rights)
    rights = '-';
  $('#fen').val(fen + ' ' + turn + ' ' + rights + ' - 0 1');
};

//}}}
//{{{  onDrop

var onDrop = function(source, target, piece, newPos, oldPos, orientation) {
  uiBoard.position(newPos);
  updateFenFromBoard();
};

//}}}
//{{{  eval

function eval() {
  return false;
}

function eval2() {
  if (engine)
    engine.terminate();
  if (!lozData.source) {
    return false;
  }
  engine           = new Worker(lozData.source);
  engine.onmessage = lozStandardRx;
  $(lozData.idInfo).html('');
  var fen = $('#fen').val(); //.trim();
  engine.postMessage('ucinewgame');
  if (fen)
    engine.postMessage('position fen ' + fen);
  else
    engine.postMessage('position startpos');
  engine.postMessage('eval');
}

//}}}
//{{{  anal

function anal() {
  if (engine)
    engine.terminate();
  engine           = new Worker(lozData.source);
  engine.onmessage = lozStandardRx;
  $(lozData.idInfo).html('');
  var fen = $('#fen').val();//.trim();
  engine.postMessage('ucinewgame');
  if (fen)
    engine.postMessage('position fen ' + fen);
  else
    engine.postMessage('position startpos');
  if (bookBin) {
    engine.postMessage({book: bookBin});
  }
  var movetime = 60 * 1000;
  engine.postMessage('go movetime ' + movetime);
  //engine.postMessage('go depth 99');
}

//}}}

$(function() {

  //{{{  init DOM
  
  lozEngineList(args.e);
  
  $('button').tooltip({delay: {"show": 1000, "hide": 100}});
  
  //}}}
  //{{{  handlers
  
  $('.selengine').click(function() {
  
    var fen = $('#fen').val().trim();
  
    window.location = lozMakeURL ({
      e   : $(this).attr('id'),
      fen : fen,
      act : args.act
    });
  
    return false;
  });
  
  $('#startpos').click(function() {
    uiBoard.start();
    updateFenFromBoard();
    return false;
  });
  
  $('#clearpos').click(function() {
    uiBoard.clear();
    updateFenFromBoard();
    return false;
  });
  
  $('#flippos').click(function() {
    uiBoard.orientation('flip');
    return false;
  });
  
  $('#flipturn').click(function() {
    var feno = lozDecodeFEN($('#fen').val());
    if (feno.turn == 'w')
      feno.turn = 'b';
    else
      feno.turn = 'w';
    $('#fen').val(lozEncodeFEN(feno));
    return false;
  });
  
  $('#fen').blur(function() {
    updateBoardFromFen();
    return false;
  });
  
  $('#start').click(function() {
    anal();
    return false;
  });
  
  $('#stop').click(function() {
    engine.terminate();
    engine = null;
    return false;
  });
  
  $('#eval').click(function() {
    eval2();
    return false;
  });
  
  //}}}

  chess = new Chess();
  uiBoard = new ChessBoard('board', {
    showNotation : true,
    draggable    : false,
    dropOffBoard : 'snapback',
    sparePieces  : false,
    onDrop       : onDrop,
    position     : 'start'
  });

  /*if (args.fen) {
    $('#fen').val(args.fen)
    updateBoardFromFen();
  }
  else
    updateFenFromBoard();*/
    updateBoardFromFen();
  if (args.act == 'eva')
    eval2();
  else if (args.act == 'ana')
    anal();
  else {
    if (engine)
      engine.terminate();
    engine           = new Worker(lozData.source);
    engine.onmessage = lozStandardRx;
    $(lozData.idInfo).html('');
    engine.postMessage('uci');
  }
  var testing = 1;

});
