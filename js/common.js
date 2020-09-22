$(function(){
  // indexページにチャートjsで表を表示(indexのみに反映)
  if ( window.document.body.id === 'index'){


    var drawGraph = function(data){
    var ctx = document.getElementById('graph').getContext("2d");
      

    // データ1
      var data1 = {
          label:'強さ',
          data:data[1],
          backgroundColor: "transparent",
          borderColor: "#2e93ba",
          lineTension: 0,
          pointRadius: 0,
      };
      var data2 = {
        label:'強さ',
        data:data[2],
        backgroundColor: "rgba(153,117,74,0.7)",
        borderColor: "transparent",
        lineTension: 0,
        pointRadius: 0,
      };
    // ラベル(横軸)
      var label = data[0];

    // データの設定
      var config = {
          type: 'radar', // グラフの種類（レーダーチャートを指定）
          data: { 
              labels: label, 
              datasets: [
                data1,
                data2
              ]
          },

          // オプション設定
          options: {
              //凡例の設定
              // chartArea: {
              //   backgroundColor: 'rgb(150,150,150)'
              // },
              animation: false,
              legend: {
                display: false,
                labels: {
                  // このフォントプロパティ指定は、グローバルプロパティを上書きします
                  fontFamily: 'Sawarabi Gothic'
                }
              },
              // レスポンシブ指定
              responsive: false,
              //スケールの設定
              scale: {
                  pointLabels: {
                      fontSize: 14,
                      fontColor: 'black',
                      fontStyle: 'bold',
                      fontFamily: 'Sawarabi Gothic'
                      
                  },
                  gridLines:{
                    color: '#674c2c',
                  },
                  angleLines:{
                    color: '#674c2c'
                  },
                  ticks: {
                      // display: false,
                      // 目盛り値のカスタマイズ
                      display: false,
                      backdropColor: 'transparent',
                      stepSize: 20,
                      fontColor: 'rgb(255,255,255)',
                      // 最小値の値を0指定
                      beginAtZero:false,
                      min: 0,
                      // 最大値を指定
                      max: 100,
                      fontSize: 11,
                  },
                  major: {
                      enabled: true,
                  }
              },
              tooltips:{
                  enabled: false,
              },
          }
      }

    var myChartGraph = new Chart(ctx, config);

    };

    // ラベルの設定

    $(document).on('click','#attack_plus', function(){
      if(attack <= 90){
        attack += 10
      }else{
        return false
      }
      var data = [['攻撃力', '   防御力', '素早さ', '賢さ', '幸運   '],
      [attack, defense, speed, cleverness, good],[100,100,100,100,100]]

      drawGraph(data);
    });

    $(document).on('click','#attack_minus', function(){
      if(attack >= 10){
        attack -= 10
      }else{
        return false;
      }
      var data = [['攻撃力', '   防御力', '素早さ', '賢さ', '幸運   '],
      [attack, defense, speed, cleverness, good],[100,100,100,100,100]]

      drawGraph(data);
    });

    $(document).on('click','#defense_plus', function(){
      if(defense <= 90){
        defense += 10
      }else{
        return false
      }
      var data = [['攻撃力', '   防御力', '素早さ', '賢さ', '幸運   '],
      [attack, defense, speed, cleverness, good],[100,100,100,100,100]]

      drawGraph(data);
    });

    $(document).on('click','#defense_minus', function(){
      if(defense >= 10){
        defense -= 10
      }else{
        return false;
      }
      var data = [['攻撃力', '   防御力', '素早さ', '賢さ', '幸運   '],
      [attack, defense, speed, cleverness, good],[100,100,100,100,100]]

      drawGraph(data);
    });

    $(document).on('click','#speed_plus', function(){
      if(speed <= 90){
        speed += 10
      }else{
        return false
      }
      var data = [['攻撃力', '   防御力', '素早さ', '賢さ', '幸運   '],
      [attack, defense, speed, cleverness, good],[100,100,100,100,100]]

      drawGraph(data);
    });

    $(document).on('click','#speed_minus', function(){
      if(speed >= 10){
        speed -= 10
      }else{
        return false;
      }
      var data = [['攻撃力', '   防御力', '素早さ', '賢さ', '幸運   '],
      [attack, defense, speed, cleverness, good],[100,100,100,100,100]]

      drawGraph(data);
    });

    $(document).on('click','#cleverness_plus', function(){
      if(cleverness <= 90){
        cleverness += 10
      }else{
        return false
      }
      var data = [['攻撃力', '   防御力', '素早さ', '賢さ', '幸運   '],
      [attack, defense, speed, cleverness, good],[100,100,100,100,100]]

      drawGraph(data);
    });

    $(document).on('click','#cleverness_minus', function(){
      if(cleverness >= 10){
        cleverness -= 10
      }else{
        return false;
      }
      var data = [['攻撃力', '   防御力', '素早さ', '賢さ', '幸運   '],
      [attack, defense, speed, cleverness, good],[100,100,100,100,100]]

      drawGraph(data);
    });

    $(document).on('click','#good_plus', function(){
      if(good <= 90){
        good += 10
      }else{
        return false
      }
      var data = [['攻撃力', '   防御力', '素早さ', '賢さ', '幸運   '],
      [attack, defense, speed, cleverness, good],[100,100,100,100,100]]

      drawGraph(data);
    });

    $(document).on('click','#good_minus', function(){
      if(good >= 10){
        good -= 10
      }else{
        return false;
      }
      var data = [['攻撃力', '   防御力', '素早さ', '賢さ', '幸運   '],
      [attack, defense, speed, cleverness, good],[100,100,100,100,100]]

      drawGraph(data);
    });

    var attack = 60;

    var defense = 90;

    var speed = 40;

    var cleverness = 60;

    var good = 40;

    var data = [['攻撃力', '   防御力', '素早さ', '賢さ', '幸運   '],
    [attack, defense, speed, cleverness, good],[100,100,100,100,100]]

    
    drawGraph(data);
  }

  //トースター表示
  //現在トップページを読み込み時に発火させています。　発火させるタイミングの制御をお願いします。


  // もしindexぺーじなら
  if ( window.document.body.id === 'index'){

    //読み込み時に発火
    $(document).ready( function(){

      // トースターのオプションです。
      toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-full-width",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }

      // 実際にひょうじされるトースターです
      Command: toastr["info"]("「タイトル」のクリア報酬を受け取りました。");
      Command: toastr["error"]("『タイトル』のチェックを申請しました。");
      Command: toastr["success"]("新しいクエスト『タイトル』が開始されました。");
      Command: toastr["warning"]("新しいクエスト「タイトル」のパーティ募集が開始されました。");


    });
  }

  //トースターここまで


  // モーダル表示

  $('.js-modal-open').each(function(){
    $(this).on('click',function(){
        var target = $(this).data('target');
        var modal = document.getElementById(target);
        $(modal).fadeIn();
        return false;
    });
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  }); 


  // モダールからモーダルへの切り替え

  $('#party_link').on('click', function() {
    changeModal('modal_detail', 'modal_party')
  });

  $('#return_btn').on('click', function() {
    changeModal('modal_party', 'modal_detail')
  })

  $('#now_link').on('click', function() {
    changeModal('modal_party', 'modal_now')
  })

  $('.detail_link').on('click', function() {
    changeModal('modal_index', 'modal_detail')
  })

  $('#clear_btn').on('click', function() {
    changeModal('modal_index', 'modal_finish')
  })



  function changeModal(beforeModal, afterModal) {
    $('#'+beforeModal).fadeOut();
    $('#'+afterModal).fadeIn();
  }

  // モーダルここまで


  //タブ切り替え
  $('.detail__btn').click(function(){

    let index = $('.detail__btn').index(this);

    $('.detail__btn').removeClass('active');

    $(this).addClass('active');

    $('.detail__content').removeClass('show').eq(index).addClass('show');

  });

  $('.ranking__btn__content').click(function(){

    let index = $('.ranking__btn__content').index(this);


    $('.ranking__left__table').removeClass('active').eq(index).addClass('active');

  });

  


  // タブ切り替えここまで

  //スライド実装

  if ( window.document.body.id === 'detail'){
    let slider = $('.detail__content__flex').slick({
      dots: false,
      arrows: true,
      prevArrow: '<img src="images/detail/detail__left__yajirushi.png" class="prev_btn">',
      nextArrow: '<img src="images/detail/detail__right__yajirushi.png" class="next_btn">',
      slidesToShow: 3,
      slidesToScroll: 3
    });

    $('.detail__btn').click(function() {
      slider.slick('setPosition');
    })
  }

  if ( window.document.body.id === 'content'){
    $('.content__main__detail-slick').slick({
      dots: false,
      arrows: true,
    });
  }

  // スライド実装ここまで

  // ハンコを押すアニメーションここから

  $('#hanko_link').click(function(){
    $('#hanko').animate({
      opacity: 1,
      "top": "inherit",
      "bottom": "0",
      "width": "185px"
    }, 1000, "easeOutBounce");
  });

  $('.hanko_back').click(function(){
    $('#hanko').animate({
      opacity: 0,
      "top": "0",
      "bottom": "inherit",
      "width": "300px"
    }, 0, "easeOutBounce");
  })

  //アニメーションここまで


  //画像プレビューここから

  $("#image_file").change(function(){
    $("#mask_file").val($("#image_file").val());
  })
  $("#mask_file").click(function(){
    $("#image_file").click();
  })


  $('#image_file').change(function(e){

    if ( this.files.length > 4 ) {
      alert('upできるのは4つまでです');
    return false;
    }
    $('#thumbnail').text('');
    $('#bigImage').text('');

    var $files = $(this).prop('files');
    var len = $files.length;
    var $big = $files[0];


    for ( var i = 0; i < len; i++ ) {
      var file = $files[i];
      var fr = new FileReader();
      fr.onload = function(e) {
          var src = e.target.result;
          var img = '<img class="sub" src="'+ src +'">';
          $('#thumbnail').append(img);
          var bigimg = '<img class="main" src="'+ src +'">';
          $('#bigImage').append(bigimg);
      }

      fr.readAsDataURL(file);
    }

  });

  $(document).on('click', '.sub', function(){
    let clicksub = $(this).attr('src');
    $('.main:first-child').attr('src', clicksub);
  });


  $(document).on('click', '.right__top__image', function(){
    let clickright = $(this).attr('src');
    $('.left__top__image').attr('src', clickright);
  })

  // 画像プレビューここまで


  // チャット　new 画像プレビュー


  $("#image_file_newchat").change(function(){
    $("#mask_file_newchat").val($("#image_file_newchat").val());
  })
  $("#mask_file_newchat").click(function(){
    $("#image_file_newchat").click();
  })


  $('#image_file_newchat').change(function(e){

    $('.upload__text').text('');

    var $files = $(this).prop('files');
    var len = $files.length;


    for ( var i = 0; i < len; i++ ) {
      var file = $files[i];
      var fr = new FileReader();
      var name = file.name;
      fr.onload = function(e) {
          var name = file.name;
          $('.upload__text').append(name);
      }

      fr.readAsDataURL(file);
    }

  });



  // チャット　new ここまで

  // qa logo切り替えここから
  $('.qa_btn').click(function(){

    let index = $('.qa_btn').index(this);

    $('.qa_img').removeClass('active').eq(index).addClass('active');

  });

  //　qa logoここまで

  // アコーディオン

  $('.qa__detail__content').click(function(){

    let $answer = $(this).find('.qa__detail__a');
    let $triangle = $(this).find('.triangle');

    if($answer.hasClass('open')) {
      $answer.removeClass('open');

      $answer.slideUp();
      $triangle.removeClass('trans');

    } else {
      $answer.addClass('open');

      $answer.slideDown();

      $triangle.addClass('trans');

    }

  });


});


