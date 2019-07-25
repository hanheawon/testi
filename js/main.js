$(function(){
    // 1.마우스가 1depth에 올라가면(hover) 2depth보임
    // 2.마우스가 1depth에서 나가면 2depth 사라짐
    $('#main-menu > li').hover(
      function(){
        // mouseover
        $(this)
          .find('.depth2')
          .addClass('show');
      },
      function(){
        // mouseout
        $(this)
          .find('.depth2')
          .removeClass('show');
      }
    )
  });  