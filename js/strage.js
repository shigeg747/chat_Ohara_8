// 「未完成」キャンセルクリックでアラート、再comfirmにならない
// ログイン名前確認
window.onload = function() {
  const user = prompt("名前を入力してください");
  console.log(user);
  // const cname = user.textContex();
  if(user != ""){
      $("#user").text(user);
  }else if(user == ""){
      $("#user").text("MRFOO");
  }else if(user === null){
    user()
  }else if(user.length >= 7){
    alert("8文字以下にしてください")
  }
}


// 文字カウンター
$(function(){
  const text_max = 50; //最大入力値
  $(".count").text(text_max - $("#text").val().length);
  
  $("#text").on("keydow keyup keypress change", function(){
    const text_length = $(this).val().length;
    const countdown = text_max - text_length;
    $(".count").text(countdown);
    // 残り30文字以下になると文字がオレンジ色に10文字以下だと赤色
    if(countdown <= 30 && countdown >= 11){
      $('.count').css({
        color:'#ff9600',
        fountWeight:'bold'
      });
    } else if(countdown <= 10){
      $('.count').css({
        color:'#ff0000',
        fountWeight:'bold'
      });
    } else {
      $('.count').css({
        color:'#000000',
        fontWeight:'normal'
      });
      // 未完成
      // if(countdown <= 0){
      //   change(function(){
          
      //   })
      //   $("#send").prop("disabled", true);
      // }
    }
  });
});

//  コンファームへの
// // 名前文字数カウントバリデーションチェック
// function checkName(){
//   const user = document.getElementById('name').value;
//   if(name.length > 8){
//   console.log('8文字以下で入力してください'); 
//   }
// }

// 検索するイベントを関数化
searchWord = function(){
  let result
  let search = $(this).val(); // 検索する値
  let target;
  let hit;

  // console.log(search);

  
  // 検索結果の配列を用意
  result = [];
  
  // 検索結果エリアの表示を空にする
  $('#search-result__list').empty();
  $('.search-result__hit-num').empty();
  
  // 検索ボックスに値が入ってる場合
  if (search != '') {
    $('#output dl').each(function() {
      target = $(this).text();
      // console.log(target);
      // 検索対象となるリストに入力された文字列が存在するかどうかを判断
      if (target.indexOf(search) != -1) {
        // 存在する場合はそのリストのテキストを用意した配列に格納
        result.push(target);
        // target.hide(!search);
          
      }
    });

    // 検索結果　該当のみ表示　→　未完成、テクニックがわからない
    // document.getElementById('output').style.display = "none";
    // $('#output dl').css('display','none');
    // if(result){
    //   $('#output dl').css('display','none');
    // }
    // document.getElementById('output').style.display = "block"(result);


    // // 検索結果をページに出力
    for (let i = 0; i < result.length; i ++) {
      $('<span>').text(result[i]).appendTo('#search-result__list');
    }
    // 未完成部分→送信後のカウンタークリア　→時間が足りなかった
    // ヒットの件数をページに出力
    hit = '<span>検索結果</span>：' + result.length + '件見つかりました。';
    $('.search-result__hit-num').append(hit);
  }
};
   
  // searchWordの実行
  $('#search-text').on('input', searchWord);



