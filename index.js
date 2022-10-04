$(function ()
{
	$.ajax(
	{
		url:'list.txt',

		// 成功時
		success: function(data)
		{
			// データ区切り(LF、CRLF、CR)
			var data_array = data.split(/\r\n|\r|\n/);

			// 先頭が空白以外の場合
			if (data_array[0] != '')
			{
				for (var i = 0; i < data_array.length; i++)
				{
					// 子要素に追加
					var li = document.createElement('li');
					li.textContent = data_array[i];
					document.getElementById('list_object').appendChild(li);
				}
			}
		}
	});
});
// リロード
setTimeout(function () {
	location.reload();
}, 1000);