
var colorId;
$('.buttonSet').click(function(){
  console.log('clicked: '+this.id);
  colorId = this.id;
  $('#svgheader').removeClass();
  $('#svgheader').addClass('svgHeader svgHeader--'+colorId);
  $('.buttonSet').removeClass('active');
  $('#'+colorId).addClass('active');
});