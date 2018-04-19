
$(function(){
	
var strVar="";
strVar += "<ul id=\"menuAdditional\" class=\"clearfix\">";
strVar += "						";
strVar += "						<li><a id=\"searchBtn\" href=\"#\"> <svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\">";
strVar += "                                            <path fill=\"#3F3F40\" d=\"M10.351,19.949c-5.211,0-9.554-4.344-9.554-9.554c0-5.211,4.343-9.554,9.554-9.554 c5.209,0,9.553,4.343,9.553,9.554C19.904,15.605,15.561,19.949,10.351,19.949z M10.351,2.579c-4.343,0-7.817,3.473-7.817,7.816 c0,4.343,3.474,7.817,7.817,7.817c4.342,0,7.817-3.475,7.817-7.817C18.168,6.052,14.693,2.579,10.351,2.579z\"><\/path>";
strVar += "                                            <path fill=\"#3F3F40\" d=\"M17.298,16.127l7.643,7.643c0.351,0.35,0.351,0.871,0,1.215c-0.173,0.174-0.521,0.174-0.694,0.174 c-0.172,0-0.521,0-0.693-0.174l-7.643-7.643L17.298,16.127z\"><\/path>";
strVar += "                                        <\/svg>";
strVar += "						<\/a>";
strVar += "							<div class=\"menuFlyout\">";
strVar += "								<form role=\"search\" action=\".html\" method=\"get\">";
strVar += "									<input id=\"searchField\" name=\"searchfield\" type=\"text\" placeholder=\"Search\">";
strVar += "									";
strVar += "									<input type=\"hidden\" name=\"tp\" value=\"long\">";
strVar += "									<input type=\"hidden\" name=\"pwcGeo\" value=\"GX\">";
strVar += "									<input type=\"hidden\" name=\"pwcLang\" value=\"en\">";
strVar += "									<input type=\"hidden\" name=\"pwcHideLevel\" value=\"0\">";
strVar += "									<input type=\"hidden\" value=\"\" name=\"pwcSiteSection\">";
strVar += "								<\/form>";
strVar += "							<\/div><\/li>";
strVar += "						";
strVar += "						<li><a id=\"shareBtn\" href=\"#\"> <svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\">";
strVar += "                                            <path fill=\"#3F3F40\" d=\"M4.73,16.465c-1.912,0-3.467-1.557-3.467-3.467c0-1.911,1.555-3.467,3.467-3.467 c1.91,0,3.465,1.556,3.465,3.467C8.195,14.908,6.641,16.465,4.73,16.465z M4.73,11.212c-0.986,0-1.789,0.801-1.789,1.786 c0,0.986,0.803,1.787,1.789,1.787s1.787-0.801,1.787-1.787C6.518,12.013,5.717,11.212,4.73,11.212z\"><\/path>";
strVar += "                                            <path fill=\"#3F3F40\" d=\"M21.27,24.533c-1.911,0-3.466-1.553-3.466-3.467c0-1.912,1.555-3.467,3.466-3.467 c1.91,0,3.467,1.555,3.467,3.467C24.736,22.98,23.18,24.533,21.27,24.533z M21.27,19.281c-0.986,0-1.788,0.797-1.788,1.785 s0.802,1.785,1.788,1.785s1.787-0.797,1.787-1.785S22.256,19.281,21.27,19.281z\"><\/path>";
strVar += "                                            <path fill=\"#3F3F40\" d=\"M21.27,8.396c-1.911,0-3.466-1.553-3.466-3.463c0-1.911,1.555-3.466,3.466-3.466 c1.91,0,3.467,1.555,3.467,3.466C24.736,6.843,23.18,8.396,21.27,8.396z M21.27,3.145c-0.986,0-1.788,0.801-1.788,1.788 c0,0.983,0.802,1.784,1.788,1.784s1.787-0.801,1.787-1.784C23.057,3.945,22.256,3.145,21.27,3.145z\"><\/path>";
strVar += "                                            <rect x=\"6.432\" y=\"16.199\" transform=\"matrix(0.8884 0.459 -0.459 0.8884 9.2716 -4.0689)\" fill=\"#3F3F40\" width=\"13.148\" height=\"1.675\"><\/rect>";
strVar += "                                            <rect x=\"12.161\" y=\"2.384\" transform=\"matrix(0.4586 0.8886 -0.8886 0.4586 15.0031 -6.698)\" fill=\"#3F3F40\" width=\"1.676\" height=\"13.159\"><\/rect>";
strVar += "                                        <\/svg>";
strVar += "						<\/a>";
strVar += "							<div class=\"menuFlyout\">";
strVar += "								Share";
strVar += "								<div class=\"sh\">";
strVar += "";
strVar += "									";
strVar += "";
strVar += "								<\/div>";
strVar += "							<\/div><\/li>";
strVar += "						";
strVar += "						<li><a id=\"territoryBtn\" href=\"http:\/\/www.pwc.com\/gx\/en\/site-information\/site-index.html\">";
strVar += "								<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\">";
strVar += "                                        <path fill=\"#3F3F40\" d=\"M12.971,25.93c-0.72,0-1.437-0.432-1.868-1.148L5.07,14.438C2.484,9.982,3.777,4.094,8.087,1.507 c1.436-0.86,3.161-1.437,4.884-1.437c3.305,0,6.465,1.725,8.047,4.742c1.579,2.873,1.722,6.32,0,9.193c0,0,0,0,0,0.143 l-6.178,10.775C14.408,25.498,13.689,25.93,12.971,25.93z M12.971,1.507c-1.437,0-2.873,0.433-4.165,1.149 C5.214,4.812,4.065,9.84,6.363,13.574l6.033,10.488c0.145,0.432,0.432,0.432,0.575,0.432s0.432,0,0.573-0.432l6.179-10.631 c0,0,0,0,0-0.145c1.437-2.441,1.437-5.458,0-7.9C18.433,3.088,15.844,1.507,12.971,1.507z\"><\/path>";
strVar += "                                        <path fill=\"#3F3F40\" d=\"M12.971,13c-2.011,0-3.592-1.579-3.592-3.592c0-2.011,1.581-3.591,3.592-3.591 c2.011,0,3.592,1.58,3.592,3.591C16.563,11.421,14.982,13,12.971,13z M12.971,7.254c-1.149,0-2.155,1.006-2.155,2.154 c0,1.15,1.006,2.156,2.155,2.156c1.148,0,2.154-1.006,2.154-2.156C15.125,8.26,14.119,7.254,12.971,7.254z\"><\/path>";
strVar += "                                    <\/svg>";
strVar += "						<\/a>";
strVar += "							<div class=\"menuFlyout\">";
strVar += "								<input id=\"languageField\" type=\"text\" placeholder=\"Find the territory\" list=\"PwC_countries\">";
strVar += "								<div id=\"PwC_countries\" style=\"display: none;\"><a href=\"http:\/\/www.pwcalgerie.com\" title=\"Algeria\" style=\"display: none;\">Algeria<\/a><a href=\"http:\/\/www.pwc.com\/ao\/en.html\" title=\"Angola\" style=\"display: none;\">Angola<\/a><a href=\"http:\/\/www.pwc.com\/bw\/en.html\" title=\"Botswana\" style=\"display: none;\">Botswana<\/a><a href=\"http:\/\/www.pwc.com\/cm\/en.html\" title=\"Cameroon\" style=\"display: none;\">Cameroon<\/a><a href=\"http:\/\/www.pwc.com\/cv\/en.html\" title=\"Cape Verde\" style=\"display: none;\">Cape Verde<\/a><a href=\"http:\/\/www.pwc.com\/td\/en.html\" title=\"Chad\" style=\"display: none;\">Chad<\/a><a href=\"http:\/\/www.pwc.com\/cg\/en.html\" title=\"Congo (Brazzaville)\" style=\"display: none;\">Congo (Brazzaville)<\/a><a href=\"http:\/\/www.pwc.com\/cd\/en.html\" title=\"Congo (Dem. Rep.)\" style=\"display: none;\">Congo (Dem. Rep.)<\/a><a href=\"http:\/\/www.pwc.com\/gq\/en.html\" title=\"Equatorial Guinea\" style=\"display: none;\">Equatorial Guinea<\/a><a href=\"http:\/\/www.pwc.com\/ga\/en.html\" title=\"Gabon\" style=\"display: none;\">Gabon<\/a><a href=\"http:\/\/www.pwc.com\/gh\/en.html\" title=\"Ghana\" style=\"display: none;\">Ghana<\/a><a href=\"http:\/\/www.pwc.com\/gn\/en.html\" title=\"Guinea\" style=\"display: none;\">Guinea<\/a><a href=\"http:\/\/www.pwc.com\/ke\/en.html\" title=\"Kenya\" style=\"display: none;\">Kenya<\/a><a href=\"http:\/\/www.pwc.com\/mg\/en.html\" title=\"Madagascar\" style=\"display: none;\">Madagascar<\/a><a href=\"http:\/\/www.pwc.com\/mw\/en.html\" title=\"Malawi\" style=\"display: none;\">Malawi<\/a><a href=\"http:\/\/www.pwc.com\/mu\/en.html\" title=\"Mauritius\" style=\"display: none;\">Mauritius<\/a><a href=\"http:\/\/pwcmaroc.pwc.fr\" title=\"Morocco\" style=\"display: none;\">Morocco<\/a><a href=\"http:\/\/www.pwc.com\/mz\/en.html\" title=\"Mozambique\" style=\"display: none;\">Mozambique<\/a><a href=\"http:\/\/www.pwc.com\/na\/en.html\" title=\"Namibia\" style=\"display: none;\">Namibia<\/a><a href=\"http:\/\/www.pwc.com\/ng\/en.html\" title=\"Nigeria\" style=\"display: none;\">Nigeria<\/a><a href=\"http:\/\/www.pwc.com\/rw\/en.html\" title=\"Rwanda\" style=\"display: none;\">Rwanda<\/a><a href=\"http:\/\/www.pwc.com\/sn\/en.html\" title=\"Senegal\" style=\"display: none;\">Senegal<\/a><a href=\"http:\/\/www.pwc.co.za\" title=\"South Africa\" style=\"display: none;\">South Africa<\/a><a href=\"http:\/\/www.pwc.com\/sz\/en.html\" title=\"Swaziland\" style=\"display: none;\">Swaziland<\/a><a href=\"http:\/\/www.pwc.com\/tz\/en.html\" title=\"Tanzania\" style=\"display: none;\">Tanzania<\/a><a href=\"http:\/\/tunisie.pwc.fr\" title=\"Tunisia\" style=\"display: none;\">Tunisia<\/a><a href=\"http:\/\/www.pwc.com\/ug\/en.html\" title=\"Uganda\" style=\"display: none;\">Uganda<\/a><a href=\"http:\/\/www.pwc.com\/zm\/en.html\" title=\"Zambia\" style=\"display: none;\">Zambia<\/a><a href=\"http:\/\/www.pwc.com\/zw\/en.html\" title=\"Zimbabwe\" style=\"display: none;\">Zimbabwe<\/a><a href=\"http:\/\/www.pwc.com\/bb\/en.html\" title=\"Antigua\" style=\"display: none;\">Antigua<\/a><a href=\"http:\/\/www.pwc.com.ar\" title=\"Argentina\" style=\"display: none;\">Argentina<\/a><a href=\"http:\/\/www.pwc.com\/an\/en.html\" title=\"Aruba\" style=\"display: none;\">Aruba<\/a><a href=\"http:\/\/www.pwc.com\/bs\/en.html\" title=\"Bahamas\" style=\"display: none;\">Bahamas<\/a><a href=\"http:\/\/www.pwc.com\/bb\/en.html\" title=\"Barbados\" style=\"display: none;\">Barbados<\/a><a href=\"http:\/\/www.pwc.com\/bm\/en.html\" title=\"Bermuda\" style=\"display: none;\">Bermuda<\/a><a href=\"http:\/\/www.pwc.com\/an\/en.html\" title=\"BES Islands\" style=\"display: none;\">BES Islands<\/a><a href=\"http:\/\/www.pwc.com\/bo\/es.html\" title=\"Bolivia\" style=\"display: none;\">Bolivia<\/a><a href=\"http:\/\/www.pwc.com.br\" title=\"Brazil\" style=\"display: none;\">Brazil<\/a><a href=\"http:\/\/www.pwc.com\/vg\/en.html\" title=\"British Virgin Islands\" style=\"display: none;\">British Virgin Islands<\/a><a href=\"http:\/\/www.pwc.com\/ca\/en.html\" title=\"Canada\" style=\"display: none;\">Canada<\/a><a href=\"http:\/\/www.pwc.com\/an\/en.html\" title=\"Curaçao\" style=\"display: none;\">Curaçao<\/a><a href=\"http:\/\/www.pwc.com\/ky\/en.html\" title=\"Cayman Islands\" style=\"display: none;\">Cayman Islands<\/a><a href=\"http:\/\/www.pwc.com\/ia\/es.html\" title=\"Central America\" style=\"display: none;\">Central America<\/a><a href=\"http:\/\/www.pwc.com\/cl\/en.html\" title=\"Chile\" style=\"display: none;\">Chile<\/a><a href=\"http:\/\/www.pwc.com\/co\/es.html\" title=\"Colombia\" style=\"display: none;\">Colombia<\/a><a href=\"http:\/\/www.pwc.com\/cr\/es.html\" title=\"Costa Rica\" style=\"display: none;\">Costa Rica<\/a><a href=\"http:\/\/www.pwc.com\/do\/es.html\" title=\"Dominican Republic\" style=\"display: none;\">Dominican Republic<\/a><a href=\"http:\/\/www.pwc.com\/an\/en.html\" title=\"Dutch Caribbean\" style=\"display: none;\">Dutch Caribbean<\/a><a href=\"http:\/\/www.pwc.ec\/\" title=\"Ecuador\" style=\"display: none;\">Ecuador<\/a><a href=\"http:\/\/www.pwc.com\/sv\/es.html\" title=\"El Salvador\" style=\"display: none;\">El Salvador<\/a><a href=\"http:\/\/www.pwc.com\/gt\/es.html\" title=\"Guatemala\" style=\"display: none;\">Guatemala<\/a><a href=\"http:\/\/www.pwc.com\/hn\/es.html\" title=\"Honduras\" style=\"display: none;\">Honduras<\/a><a href=\"http:\/\/www.pwc.com\/ia\/es.html\" title=\"Interaméricas\" style=\"display: none;\">Interaméricas<\/a><a href=\"http:\/\/www.pwc.com\/jm\/en.html\" title=\"Jamaica\" style=\"display: none;\">Jamaica<\/a><a href=\"http:\/\/www.pwc.com\/mx\/es.html\" title=\"Mexico\" style=\"display: none;\">Mexico<\/a><a href=\"http:\/\/www.pwc.com\/ni\/es.html\" title=\"Nicaragua\" style=\"display: none;\">Nicaragua<\/a><a href=\"http:\/\/www.pwc.com\/pa\/es.html\" title=\"Panama\" style=\"display: none;\">Panama<\/a><a href=\"http:\/\/www.pwc.com\/py\/es.html\" title=\"Paraguay\" style=\"display: none;\">Paraguay<\/a><a href=\"http:\/\/www.pwc.com\/pe\/es.html\" title=\"Peru\" style=\"display: none;\">Peru<\/a><a href=\"http:\/\/www.pwc.com\/bb\/en.html\" title=\"St. Kitts and Nevis\" style=\"display: none;\">St. Kitts and Nevis<\/a><a href=\"http:\/\/www.pwc.com\/bb\/en.html\" title=\"St. Lucia\" style=\"display: none;\">St. Lucia<\/a><a href=\"http:\/\/www.pwc.com\/an\/en.html\" title=\"St. Maarten\" style=\"display: none;\">St. Maarten<\/a><a href=\"http:\/\/www.pwc.com\/tt\/en.html\" title=\"Trinidad and Tobago\" style=\"display: none;\">Trinidad and Tobago<\/a><a href=\"http:\/\/www.pwc.com\/us\/en.html\" title=\"United States\" style=\"display: none;\">United States<\/a><a href=\"http:\/\/www.pwc.com\/us\/en.html\" title=\"US\" style=\"display: none;\">US<\/a><a href=\"http:\/\/www.pwc.com\/us\/en.html\" title=\"U.S.\" style=\"display: none;\">U.S.<\/a><a href=\"http:\/\/www.pwc.com\/us\/en.html\" title=\"USA\" style=\"display: none;\">USA<\/a><a href=\"http:\/\/www.pwc.com.uy\" title=\"Uruguay\" style=\"display: none;\">Uruguay<\/a><a href=\"http:\/\/www.pwc.com\/ve\/en.html\" title=\"Venezuela\" style=\"display: none;\">Venezuela<\/a><a href=\"http:\/\/www.pwc.com\/af\/en.html\" title=\"Afghanistan\" style=\"display: none;\">Afghanistan<\/a><a href=\"http:\/\/www.pwc.com.au\" title=\"Australia\" style=\"display: none;\">Australia<\/a><a href=\"http:\/\/www.pwc.com\/kh\/en.html\" title=\"Cambodia\" style=\"display: none;\">Cambodia<\/a><a href=\"http:\/\/www.pwccn.com\/home\/eng\/index.html\" title=\"China\" style=\"display: none;\">China<\/a><a href=\"http:\/\/www.pwchk.com\/home\/eng\/index.html\" title=\"Hong Kong\" style=\"display: none;\">Hong Kong<\/a><a href=\"http:\/\/www.pwc.in\" title=\"India\" style=\"display: none;\">India<\/a><a href=\"http:\/\/www.pwc.com\/id\/en.html\" title=\"Indonesia\" style=\"display: none;\">Indonesia<\/a><a href=\"http:\/\/www.pwc.com\/jp\/ja.html\" title=\"Japan\" style=\"display: none;\">Japan<\/a><a href=\"http:\/\/www.pwc.com\/kr\/en.html\" title=\"Korea\" style=\"display: none;\">Korea<\/a><a href=\"http:\/\/www.pwc.com\/la\/en.html\" title=\"Laos\" style=\"display: none;\">Laos<\/a><a href=\"http:\/\/www.pwchk.com\/home\/eng\/about_macau.html\" title=\"Macau\" style=\"display: none;\">Macau<\/a><a href=\"http:\/\/www.pwc.com\/my\/en.html\" title=\"Malaysia\" style=\"display: none;\">Malaysia<\/a><a href=\"http:\/\/www.pwc.com\/mv\/en.html\" title=\"Maldives\" style=\"display: none;\">Maldives<\/a><a href=\"http:\/\/www.pwc.com\/mm\/en.html\" title=\"Myanmar\" style=\"display: none;\">Myanmar<\/a><a href=\"http:\/\/www.pwc.com\/nc\/en.html\" title=\"New Caledonia\" style=\"display: none;\">New Caledonia<\/a><a href=\"http:\/\/www.pwc.co.nz\" title=\"New Zealand\" style=\"display: none;\">New Zealand<\/a><a href=\"http:\/\/www.pwc.com.pk\" title=\"Pakistan\" style=\"display: none;\">Pakistan<\/a><a href=\"http:\/\/www.pwc.com\/pg\/en.html\" title=\"Papua New Guinea\" style=\"display: none;\">Papua New Guinea<\/a><a href=\"http:\/\/www.pwc.com\/ph\/en.html\" title=\"Philippines\" style=\"display: none;\">Philippines<\/a><a href=\"http:\/\/www.pwc.com\/sg\/en.html\" title=\"Singapore\" style=\"display: none;\">Singapore<\/a><a href=\"http:\/\/www.pwc.com\/lk\/en.html\" title=\"Sri Lanka\" style=\"display: none;\">Sri Lanka<\/a><a href=\"http:\/\/www.pwc.tw\" title=\"Taiwan\" style=\"display: none;\">Taiwan<\/a><a href=\"http:\/\/www.pwc.com\/th\/en.html\" title=\"Thailand\" style=\"display: none;\">Thailand<\/a><a href=\"http:\/\/www.pwc.com\/vn\/en.html\" title=\"Vietnam\" style=\"display: none;\">Vietnam<\/a><a href=\"http:\/\/www.pwc.com\/am\/en.html\" title=\"Armenia\" style=\"display: none;\">Armenia<\/a><a href=\"http:\/\/www.pwc.com\/az\/en.html\" title=\"Azerbaijan\" style=\"display: none;\">Azerbaijan<\/a><a href=\"http:\/\/www.pwc.com\/ge\/en.html\" title=\"Georgia\" style=\"display: none;\">Georgia<\/a><a href=\"http:\/\/www.pwc.kz\" title=\"Kazakhstan\" style=\"display: none;\">Kazakhstan<\/a><a href=\"http:\/\/www.pwc.com\/uz\/en.html\" title=\"Uzbekistan\" style=\"display: none;\">Uzbekistan<\/a><a href=\"http:\/\/www.pwc.com\/mn\/en.html\" title=\"Mongolia\" style=\"display: none;\">Mongolia<\/a><a href=\"http:\/\/www.pwc.com\/al\/en.html\" title=\"Albania\" style=\"display: none;\">Albania<\/a><a href=\"http:\/\/www.pwc.at\" title=\"Austria\" style=\"display: none;\">Austria<\/a><a href=\"http:\/\/www.pwc.by\" title=\"Belarus\" style=\"display: none;\">Belarus<\/a><a href=\"http:\/\/www.pwc.be\" title=\"Belgium\" style=\"display: none;\">Belgium<\/a><a href=\"http:\/\/www.pwc.ba\" title=\"Bosnia and Herzegovina\" style=\"display: none;\">Bosnia and Herzegovina<\/a><a href=\"http:\/\/www.pwc.com\/bg\/en.html\" title=\"Bulgaria\" style=\"display: none;\">Bulgaria<\/a><a href=\"http:\/\/www.pwc.com\/jg\/en.html\" title=\"Channel Islands\" style=\"display: none;\">Channel Islands<\/a><a href=\"http:\/\/www.pwc.hr\" title=\"Croatia\" style=\"display: none;\">Croatia<\/a><a href=\"http:\/\/www.pwc.cy\" title=\"Cyprus\" style=\"display: none;\">Cyprus<\/a><a href=\"http:\/\/www.pwc.com\/cz\/en.html\" title=\"Czech Republic\" style=\"display: none;\">Czech Republic<\/a><a href=\"http:\/\/www.pwc.dk\" title=\"Denmark\" style=\"display: none;\">Denmark<\/a><a href=\"http:\/\/www.pwc.com\/ee\/en.html\" title=\"Estonia\" style=\"display: none;\">Estonia<\/a><a href=\"http:\/\/www.pwc.fi\" title=\"Finland\" style=\"display: none;\">Finland<\/a><a href=\"http:\/\/www.pwc.fr\/\" title=\"France\" style=\"display: none;\">France<\/a><a href=\"http:\/\/www.pwc.de\" title=\"Germany\" style=\"display: none;\">Germany<\/a><a href=\"http:\/\/www.pwc.gi\" title=\"Gibraltar\" style=\"display: none;\">Gibraltar<\/a><a href=\"http:\/\/www.pwc.com\/gr\/en.html\" title=\"Greece\" style=\"display: none;\">Greece<\/a><a href=\"http:\/\/www.pwc.com\/hu\/en.html\" title=\"Hungary\" style=\"display: none;\">Hungary<\/a><a href=\"http:\/\/www.pwc.is\" title=\"Iceland\" style=\"display: none;\">Iceland<\/a><a href=\"http:\/\/www.pwc.ie\" title=\"Ireland\" style=\"display: none;\">Ireland<\/a><a href=\"http:\/\/www.pwc.com\/im\/en.html\" title=\"Isle of Man\" style=\"display: none;\">Isle of Man<\/a><a href=\"http:\/\/www.pwc.com\/it\/en.html\" title=\"Italy\" style=\"display: none;\">Italy<\/a><a href=\"http:\/\/www.pwc.com\/ks\/en.html\" title=\"Kosovo\" style=\"display: none;\">Kosovo<\/a><a href=\"http:\/\/www.pwc.com\/lv\/lv.html\" title=\"Latvia\" style=\"display: none;\">Latvia<\/a><a href=\"http:\/\/www.pwc.com\/lt\/en.html\" title=\"Lithuania\" style=\"display: none;\">Lithuania<\/a><a href=\"http:\/\/www.pwc.lu\" title=\"Luxembourg\" style=\"display: none;\">Luxembourg<\/a><a href=\"http:\/\/www.pwc.com\/mk\/en.html\" title=\"Macedonia\" style=\"display: none;\">Macedonia<\/a><a href=\"http:\/\/www.pwc.com\/mt\/en.html\" title=\"Malta\" style=\"display: none;\">Malta<\/a><a href=\"http:\/\/www.pwc.com\/md\/en.html\" title=\"Moldova\" style=\"display: none;\">Moldova<\/a><a href=\"http:\/\/alleance.pwc.fr\/\" title=\"Monaco\" style=\"display: none;\">Monaco<\/a><a href=\"http:\/\/www.pwc.nl\" title=\"Netherlands\" style=\"display: none;\">Netherlands<\/a><a href=\"http:\/\/www.pwc.no\" title=\"Norway\" style=\"display: none;\">Norway<\/a><a href=\"http:\/\/www.pwc.pl\" title=\"Poland\" style=\"display: none;\">Poland<\/a><a href=\"http:\/\/www.pwc.pt\" title=\"Portugal\" style=\"display: none;\">Portugal<\/a><a href=\"http:\/\/www.pwc.ro\" title=\"Romania\" style=\"display: none;\">Romania<\/a><a href=\"http:\/\/www.pwc.ru\" title=\"Russia\" style=\"display: none;\">Russia<\/a><a href=\"http:\/\/www.pwc.rs\" title=\"Serbia\" style=\"display: none;\">Serbia<\/a><a href=\"http:\/\/www.pwc.com\/sk\/en.html\" title=\"Slovakia\" style=\"display: none;\">Slovakia<\/a><a href=\"http:\/\/www.pwc.com\/si\/en.html\" title=\"Slovenia\" style=\"display: none;\">Slovenia<\/a><a href=\"http:\/\/www.pwc.es\" title=\"Spain\" style=\"display: none;\">Spain<\/a><a href=\"http:\/\/www.pwc.se\" title=\"Sweden\" style=\"display: none;\">Sweden<\/a><a href=\"http:\/\/www.pwc.ch\" title=\"Switzerland\" style=\"display: none;\">Switzerland<\/a><a href=\"http:\/\/www.pwc.com.tr\" title=\"Turkey\" style=\"display: none;\">Turkey<\/a><a href=\"http:\/\/www.pwc.com\/ua\/en.html\" title=\"Ukraine\" style=\"display: none;\">Ukraine<\/a><a href=\"http:\/\/www.pwc.co.uk\/\" title=\"United Kingdom\" style=\"display: none;\">United Kingdom<\/a><a href=\"http:\/\/www.pwc.co.uk\/\" title=\"UK\" style=\"display: none;\">UK<\/a><a href=\"http:\/\/www.pwc.co.uk\/\" title=\"U.K.\" style=\"display: none;\">U.K.<\/a><a href=\"http:\/\/www.pwc.com\/m1\/en.html\" title=\"Bahrain\" style=\"display: none;\">Bahrain<\/a><a href=\"http:\/\/www.pwc.com\/m1\/en.html\" title=\"Egypt\" style=\"display: none;\">Egypt<\/a><a href=\"http:\/\/www.pwc.com\/m1\/en.html\" title=\"Iraq\" style=\"display: none;\">Iraq<\/a><a href=\"http:\/\/www.pwc.com\/il\/en.html\" title=\"Israel\" style=\"display: none;\">Israel<\/a><a href=\"http:\/\/www.pwc.com\/m1\/en.html\" title=\"Jordan\" style=\"display: none;\">Jordan<\/a><a href=\"http:\/\/www.pwc.com\/m1\/en.html\" title=\"Kuwait\" style=\"display: none;\">Kuwait<\/a><a href=\"http:\/\/www.pwc.com\/m1\/en.html\" title=\"Lebanon\" style=\"display: none;\">Lebanon<\/a><a href=\"http:\/\/www.pwc.com\/m1\/en.html\" title=\"Libya\" style=\"display: none;\">Libya<\/a><a href=\"http:\/\/www.pwc.com\/m1\/en.html\" title=\"Middle East region\" style=\"display: none;\">Middle East region<\/a><a href=\"http:\/\/www.pwc.com\/m1\/en.html\" title=\"Oman\" style=\"display: none;\">Oman<\/a><a href=\"http:\/\/www.pwc.com\/m1\/en.html\" title=\"Qatar\" style=\"display: none;\">Qatar<\/a><a href=\"http:\/\/www.pwc.com\/m1\/en.html\" title=\"Saudi Arabia\" style=\"display: none;\">Saudi Arabia<\/a><a href=\"http:\/\/www.pwc.com\/m1\/en.html\" title=\"United Arab Emirates\" style=\"display: none;\">United Arab Emirates<\/a><a href=\"http:\/\/www.pwc.com\/m1\/en.html\" title=\"West Bank &amp; Gaza\" style=\"display: none;\">West Bank &amp; Gaza<\/a><\/div>";
strVar += "								<button type=\"button\" id=\"territorySubmit\"><\/button>";
strVar += "								<span id=\"languageField_valid\">No match found<\/span>";
strVar += "							<\/div>";
strVar += "                        <\/li>";
	

$('#menuAdditional').replaceWith(strVar);


var mainheaderLanguageSelector = (function () {
	
	var pageLanguage = false;
	
	var languageSelectorVars = [
			{'label': 'English', 'initials': 'en', 'url':'/pwc/ui-v3/static-pages/territory-homepage--belgium.html', 'header': 'View this content in:'},
			{'label': 'French', 'initials': 'fr', 'url':'/pwc/ui-v3/static-pages/territory-homepage--belgium--FR.html', 'header': 'Affichez le content en:'},
			{'label': 'Dutch', 'initials': 'nl', 'url':'/pwc/ui-v3/static-pages/territory-homepage--belgium--NL.html', 'header': 'Lees deze pagina in het:'}
	];
	
	function initLanguageSelector(){
		
		var languageIndex = false;
		
		$.each(languageSelectorVars,function(i,ln){
			if(ln.initials === pageLanguage){
				languageIndex = i;
			}
		})
		
		if(languageIndex===false) {
			
			console.log('Language Selector error: data missing for the page language "'+pageLanguage+'"');
			
		} else {
		
			var languagesList = "<ul>";
			
			$.each(languageSelectorVars,function(i,el){			
				languagesList += '<li><a href="'+el.url+'" data-initials="'+el.initials+'"'+((languageIndex===i)?' class="selected"':'')+'>'+el.label+'</a></li>';
			})
			languagesList += "</ul>";

			var languagesHeader = "<div class=\"mainheader-language-selector__panel-header serif\">"+ languageSelectorVars[languageIndex].header +"</div>";
			
			var languageBtn = '<a href="#" onclick="return false"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><defs><style>.cls-2{fill:none;stroke:#404041;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.4px;}</style></defs><path class="cls-2" d="M22,20.8H11.95L6.65,24.26l0-3.46H4A3.21,3.21,0,0,1,.75,17.59V6A3.21,3.21,0,0,1,4,2.74H22A3.21,3.21,0,0,1,25.25,6V17.59A3.21,3.21,0,0,1,22,20.8Z"/></svg><span class="mainheader-language-selector__selected-initials">'+ languageSelectorVars[languageIndex].initials +'</span></a>';
			var languageSubMenu = '<div class="menuFlyout mainheader-language-selector__panel">'+ languagesHeader + languagesList +'</div>';
			

			$('<ul id="mobileMenuAdditional"><li class="mainheader-language-selector">'+ languageBtn +'<li></ul>').prependTo('#topBarRight');
			// append languageSubMenu
			$('#menuBarWrapper').append($('<div id="mobileLanguageSubmenu">'+languageSubMenu+'</div>'));
			
			// Instead of this
			// $('#menuAdditional').append('<li class="mainheader-language-selector ">'+ languageBtn + languageSubMenu +'</li>');
			
			// event handler has already been assigned
			var selectorListItem = $('<li class="mainheader-language-selector ">'+ languageBtn + languageSubMenu +'</li>');
			selectorListItem.appendTo('#menuAdditional').bind('click',function(){
				if($(this).is('.open')) $(this).removeClass('open');
				else $(this).addClass('open');
			}) 

			$('#mobileMenuAdditional .mainheader-language-selector').bind('click',function(e){
				e.preventDefault();
				
				var btn=$(this);
				var target = $('#mobileLanguageSubmenu');
				
				if(btn.is('.open')) {
					btn.removeClass('open');
					target.removeClass('open');
				}
				else {
					btn.addClass('open');
					target.addClass('open');
				}
				
			});
			
			
		}
		
	};
	
	function init(args) {
		pageLanguage = args.pageLanguage;
        initLanguageSelector();
    }

    return {
        init: init
    };
	
})();


	$(window).load(function(){mainheaderLanguageSelector.init({'pageLanguage':pageLanguage})});

})