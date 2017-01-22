var serviceURL="http://nujessie.mugeno.org/ngh/ikminet/";
window.onload = function () {
	
	var sdata1 = getIkmData(1);
	var sdata2 = getIkmData(2);
	var sdata3 = getIkmData(3);
	var sdata4 = getIkmData(4);
	var sdata5 = getIkmData(5);
	var sdata6 = getIkmData(6);
	var sdata7 = getIkmData(7);
	var sdata8 = getIkmData(8);
	var sdata9 = getIkmData(9);
	
	/* chart 1 */
	var chart1 = new CanvasJS.Chart("pie-syarat",
	{
		theme: "theme2", animationEnabled: true,
		
		title:{
			
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			legendText: "{indexLabel}",
			dataPoints: sdata1
		}
		]
	});
	chart1.render()
	
	/* chart 2 */
	var chart2 = new CanvasJS.Chart("pie-mudah",
	{
		theme: "theme2", animationEnabled: true,
		title:{
			
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			legendText: "{indexLabel}",
			dataPoints: sdata2
		}
		]
	});
	chart2.render(); 
	
	/* chart 3 */
	var chart3 = new CanvasJS.Chart("pie-cepat",
	{
		theme: "theme2", animationEnabled: true,
		title:{
			
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			legendText: "{indexLabel}",
			dataPoints: sdata3
		}
		]
	});
	chart3.render(); 
	
	/* chart 4 */
	var chart4 = new CanvasJS.Chart("pie-jelas",
	{
		theme: "theme2", animationEnabled: true,
		title:{
			
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			legendText: "{indexLabel}",
			dataPoints: sdata4
		}
		]
	});
	chart4.render(); 
	 
	 /* chart 5 */
	var chart5 = new CanvasJS.Chart("pie-tawab",
	{
		theme: "theme2", animationEnabled: true,
		title:{
			
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			legendText: "{indexLabel}",
			dataPoints: sdata5
		}
		]
	});
	chart5.render(); 
	 
	 /* chart 6 */
	var chart6 = new CanvasJS.Chart("pie-disiplin",
	{
		theme: "theme2", animationEnabled: true,
		title:{
			
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			legendText: "{indexLabel}",
			dataPoints: sdata6
		}
		]
	});
	chart6.render(); 
	 
	 /* chart 7 */
	var chart7 = new CanvasJS.Chart("pie-sikap",
	{
		theme: "theme2", animationEnabled: true,
		title:{
			
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			legendText: "{indexLabel}",
			dataPoints: sdata7
		}
		]
	});
	chart7.render(); 
	 
	 /* chart 8 */
	var chart8 = new CanvasJS.Chart("pie-mampu",
	{
		theme: "theme2", animationEnabled: true,
		title:{
			
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			legendText: "{indexLabel}",
			dataPoints: sdata8
		}
		]
	});
	chart8.render(); 
	 
	 /* chart 9 */
	var chart9 = new CanvasJS.Chart("pie-biaya",
	{
		theme: "theme2", animationEnabled: true,
		title:{
			
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			legendText: "{indexLabel}",
			dataPoints: sdata9
		}
		]
	});
	chart9.render(); 
	//update tiap 10 detik
/*	setTimeout(function() {
		location.reload();
	}, 30000); */
}

function getIkmData(id)
{
	var sdata = [];
	if(id != 9)
	{
		$.ajax({
			url: 'http://nujessie.mugeno.org/ngh/ikminet/survey-data.php?q='+id,
			async: false,
			dataType: 'json',
			success: function (json) {
				sdata.push({y: json.krg, indexLabel: 'Kurang'});
				sdata.push({y: json.tdk, indexLabel: 'Tidak'});
				sdata.push({y: json.ckp, indexLabel: 'Cukup'});
				sdata.push({y: json.sgt, indexLabel: 'Sangat'});
			}
		});
	}else{
		$.ajax({
			url: 'http://nujessie.mugeno.org/ngh/ikminet/survey-data.php?q='+id,
			async: false,
			dataType: 'json',
			success: function (json) {
				sdata.push({y: json.grt, indexLabel: 'Gratis'});
				sdata.push({y: json.sgm, indexLabel: 'Sangat Mahal'});
				sdata.push({y: json.ckm, indexLabel: 'Cukup Mahal'});
				sdata.push({y: json.mrh, indexLabel: 'Murah'});
			}
		});
	}
	return sdata;
}

$(document).ready(function(){
	var sex,age,edu,job,tgt,srt;
	$("#save_responden").click(function(){
		var sex = $("input[name='responden_sx']:checked").val();
		var age = $("#responden_age").val();
		var edu = $("#responden_edu").val();
		var job = $("#responden_job").val();
		var tgt = $("#survey_tgt").val();
		$.post(serviceURL+'saveResp.php', {
			sex: sex,
			age: age,
			edu: edu,
			job: job,
			tgt: tgt
		});
	});
	
	$("#save-syarat").click(function(){
		var srt = $("input[name='quest_1']:checked").val();
		var col = 'syarat';
		$.post(serviceURL+'voteUpdate.php', {
			col: col,
			svd: srt
		});
	});
	
	$("#save-mudah").click(function(){
		var svd = $("input[name='quest_2']:checked").val();
		var col = 'mudah';
		$.post(serviceURL+'voteUpdate.php', {
			col: col,
			svd: svd
		});
	});
	
	$("#save-cepat").click(function(){
		var srt = $("input[name='quest_3']:checked").val();
		var col = 'cepat';
		$.post(serviceURL+'voteUpdate.php', {
			col: col,
			svd: srt
		});
	});
	
	$("#save-tawab").click(function(){
		var srt = $("input[name='quest_4']:checked").val();
		var col = 'tawab';
		$.post(serviceURL+'voteUpdate.php', {
			col: col,
			svd: srt
		});
	});	

	$("#save-disiplin").click(function(){
		var srt = $("input[name='quest_5']:checked").val();
		var col = 'disiplin';
		$.post(serviceURL+'voteUpdate.php', {
			col: col,
			svd: srt
		});
	});	

	$("#save-sikap").click(function(){
		var srt = $("input[name='quest_6']:checked").val();
		var col = 'sikap';
		$.post(serviceURL+'voteUpdate.php', {
			col: col,
			svd: srt
		});
	});
	
	$("#save-syarat").click(function(){
		var srt = $("input[name='quest_1']:checked").val();
		var col = 'syarat';
		$.post(serviceURL+'voteUpdate.php', {
			col: col,
			svd: srt
		});
	});

	$("#save-jelas").click(function(){
		var srt = $("input[name='quest_7']:checked").val();
		var col = 'jelas';
		$.post(serviceURL+'voteUpdate.php', {
			col: col,
			svd: srt
		});
	});
	$("#save-mampu").click(function(){
		var srt = $("input[name='quest_8']:checked").val();
		var col = 'mampu';
		$.post(serviceURL+'voteUpdate.php', {
			col: col,
			svd: srt
		});
	});
	
	$("#save-biaya").click(function(){
		var srt = $("input[name='quest_9']:checked").val();
		var col = 'biaya';
		$.post(serviceURL+'voteUpdate.php', {
			col: col,
			svd: srt
		});
	});
	
	$("#save-saran").click(function(){
		var srt = $("masukan").val();
		
		$.post(serviceURL+'sarmas.php', {
			svd: srt
		});
	});
	
	$("#kamsia").click(function(){
		window.location.href='index.html';
		location.reload();
	});
});
