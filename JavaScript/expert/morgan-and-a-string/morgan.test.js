const morganAndString = require('./morgan.solution');

const huge_a = 'MZBMWEYYDIADTLCOUEGMDBYFWURPWBPUVHIFNUAPWYNDMHTQVKGKBHTYTSZOTWFLEGSJZZSZFWTZFPNSCGUEMWRCZQXYCIVDQNKYPNXNNPMUDUHZNOAQUUDHAVRNCWFWUJPCMIGGJMCMKKBNJFEODXKGJGWXTRXINGIQQUHUWQHDSWXXRXUZZFHKPLWUNFAGPPCOILDAGKTGDARVEUSJUQFISTULGBGLWMFGZRNYXRYETWZHLNFEWCZMNOOZLQATUGMDJWGZCFABBKOXYJXKATJMPPRSWKDKOBDAGWDWXSUFEESRVNCBSZCEPIGPBZUZOOOTORZFSKCWBQORVWDRMKLFDCZATFARQDKELALXZXILLKFDVPFPXABQLNGDSCRENTZAMZTVVCVRTCMBQLIZIJDWTUYFRXOLSYSXLFEBPOLCMQSPPMRFKYUNYDTMWBEXSNGXHWVROANDFQJAMZKPTTSLILDLRKJOYRPXUGICEAHGIAKEVSJOADMKFNKSWRAWKJXWCMCCIABZBRSKZAZJQTLKIQYDPTPKCSDGCQJSHZNDPVANNRYWFRNRGHLJJQRXPXNLKCWDPDKSWVTXGANWWYOOSXTNEXEEZJXOUYFJHNWPQFXEXZXFOLPCFBLPNCETYHTRWXKBOSCCSKXBUVCROSAVNPXZOEOYYGHBBQKFLSUTPWMHQWKVIRMLFCPIDLQYIKZMNTTAIFCBOPNWEZESOMKXHAIAFMVKBJAISYRBTULTPNXBCJMORNQUMATSERHIEQGGRIVOUWFNBNGHDFALLCPRVNGIKCAMVPRZAEAPQMILWKBKGOGOCNIAAISORFQXZJZTVCGVZLCEDWNEZBWXMPOBMRVXASKWVVWQUUDRNWHMMZHEQXIWHFUXAVLWFTGYXXHPYGSPVWDNVMGNWNPKDRNZNZVRKMJJMWISYRDKODOAFWSJFUVMEEWPDWPIYMWBHOXEBJIBXPHIEFGTSAWCDIVTLTRSHJQNKKMDTJGSCNOZMOJNHIGIPPJEMZZZBCVOYPLXENFFMFDZDIOJUODGBULVIVHTBHAYEEEBIACTYAOVQBIVUDYDGXWSGMHLRACAAYIPSOJLEQHPYGSHCVXWWLNEBLFMNQGDDQPCJXZFTWRLGPTRKBKRLWGSNLCAUDZDUJBBQLFZIKGXOHVHTUVCJMMWVHKXCGYEKJKKLCJQONEPPYDPSPIWQBKPSUNEDQIXLSIFCOKFRCVRSZCVDYFWUHTZPTBBNXBHQJOMXRBHJQXVDASERFFCVKECQYLQPRAWYQUEVHVUZCVFMBEWPXICSKPMZSBSUSMADDQKWGFIRLZZBCZEGHMUHXNXEJRSPCVQEJWOWQSFHOVHCTWNHUUVEPRRIYFWSTSJDECYYFJBJSDLEGQLKLXIYRWVLPPOMDFDTVTKWOKIWWPEJXIBDKNPONPSXRYTOQGJRTJPATMDLHMQEGVJHVLEHSYKRLVVSSMAMBZUSXUSZYYBDRDVZDBEXSGLYOKVMYKIFWGFNCSACJLKATHFMNLCTSQEJFOXYVMTOTTLHRLYPBZISUCLLQGAAITMXPMFINSOWJAAWSNMLUIZVPJBEWQCIPCQWVSQFBEUTDCSDRVIOZOBDYTWSIMSEETQCKLNKXTAWOXIYSVZRAKQEISPNDDXTNFQALSWXSMKSFOOIWXYNAMDJXNSMKIEWKWDPZJPKIBCBBMZBIWPMJCZCEHTCZQJZLKGYVSZPUUVETDFLUUHXPEOPUXMDYLAYSTTENJMCEDCUMOEEICJTXKKVXCXJOWRCVLTTSQHWKBBMIGTQLOVJGVIYZGCQJVPVOTWUCSETIDICYHTCMAJPHXYYOOEOVUXVUPLOKLPBOVQDWDYPBXGAJUQWADGEEDJKGURHSXDVYLMYFJQLWZLDROUYLQOBSGEMWDOIBQVCYEDFVQOPFHKQMHUSXQACOOGJXCOXBFZLWCXFVQAAVFEGKCIRQQGDYHLJMAQZQIFUAOUBUKYPAVEBVDUJGSULAHKPRFPNZQAQGVFDXWTQFLCEILPMSZIZFWBONXPLCYQITTPKPBCFSESGFBIQNIPOLEFRELPHJTHQRZSPHBNUMGRIFMWIZTFUHQIBGAXDVYSYVGXLSPMINYKBYUMEPUBRXUOAVYOVDBIELZDOBGQCJZNJBEXALKGHYWIOXZBVXZFCSHCOZMEFWCRVYIBJDFQVQMHXDPCCJODLGVKPLRFDEDPZOPRFEECHWSZHVCDOOEJLCHCWCEKTFRDMOWHSUEAVBRAWMIHZSNFHRAFBQEAWDIXZNPPFWIEAIVTMPQZQTSVNVWJMGVHUESSSAXGMOYWDGVWIOUZUQDEBIJCQYCFTAFTUWTGXAVEMCIUQMXENPRPMYZREXSHNVTESSTWHYTMATXBUZXPSTPYGFXPHPFCKJDBFBXIMEESWYNDFHOMCNWJTFRUVZWBHLZBVEBYEUCEPGCDPMGHCIBFXGRVNACXWLOPXSVZCLWYMWDMOLJTAGUWUVHXIFDJQSHLQAUEGLQRBXUWPOZFVEGDPVNWMEDXBMXAGIMXMXGJLNNFKWBRQSHXFCANWPOFLQEJAFDKTNLPGVLEXCYGLRZBKHCMXVUOBYXCXZXQMLSWVLMBVCSDTEFCQTMLILWZTBSCFHJTCYTONMLIIVRKBBLVNMHIPRGERYRPJPJYKCHNEYFYMIEFYMAJRNWJSLYTBXMDUWTFZAFKXYFMCNLJSEBZLEYGEGUUJMKYYLFMMVVILJWGCYHRDLDKZFZGTVMOWLBEQTJSODVHBUUMEXPPCDXQHCEQLDFAVGQLVITUZZNGJEOTBKJZCRTGGLUIAMNCORBKIWDOZITQGQIPHVWUIJWHSMGOGXOMLUQURCWOGGHHJJCEKGGLLAMQGXHCFCMRAKGROJGXIZWXASCASINZXCDXEWCULOFITYLHXHZXMJDLISUPDYLSHAHCIPZOPTULLYISXSCZJQAWAGNNGCGGIWKHNARJISVCDPZGGTLLUDVCSJXEUBFGYJDIMTPFTGYTKFNTYLNFLBFUTSYOVXMLIGOAIQZLXWFRSLJUCDXSSAMGCIFDLJASHCJJWHLKQNIPXZJGLPTEDZXMTHVZGRUHHCKUFDECAKRRZOQFQCDUZHJSDASKQGLQLNNBKUUYTQTHFCJRAAWTBCCURPZPUMCSMQHEBHQRFIGAMBLZXYCVEVLUZCUQXVRJGEKYAOFVRVCOHLDAVKJIYKHCCMNJPDHKKIMPSMVCYQXLGWLBHLDKJLZWTHKFNIZEBVLGOZRNWWVXDCKGNCKQTKQIDHOOCIWRPKXESLDTGXTAURGLBGMPYQLPZBNSBZHANBIYPUZIQURWRBRBXMHBRDPDRERBOBAJULDLWRPKRTFBLSPNKXYITIOHLPGJLCKTLAQSALNOIPHBTUYRRGHSEZNKMZUKAIIHATZTTIYLACTADTNINWCSUFBYNJKXAAJNAGFEVSCFUHOAJUQMISGBBSXQBYLMRASZACPLIUGLQYUZBNIZXXJXNNTSCKJZJZJMMYFMVXJAOPVEFHWHBYOAPKQEDYDDTRPBLPORURSKNPBTAMZKKZRRDDCMRAYGLNJUIKQYNJAUCAQEKHCWXDQPDOHYCVAEXJYULGVWTOVQGSFIVKVUNQDEKHNGXJYYCSPVZULHKYWGQJGAQCLPSXNSERDNRJXROZMXTJTVOSSYQPVOTKHMBQAXIQXUXZLZTKSOHUJRTAIMPDESFQJBJIFGYBEBNUIICFJTEQFVSYRWWJZISSAIMGCUSLEIACQXJIPDTILJQRBLDLIRSIEWJPLNAIDVVIXJQTQJDOZLDBBEEMVMVEQLHJZTCOUOSTCGROMEKRINQBGVGLJHVEAONQKRTJJTLGBKRNYOIXIRSLFSZFQIVGKAFLGKCTVBVKSIPWOMQXLYQXHLBCEUHBJBFNHOFCGPGWDSEFFYCTHMLPCQEJGSKWJKBKBBMIFNURNWYHEVSOQZMTVZGFIQAJFRGYUZXNRTXECTCNLYOISBGLPDBJBSLXLPOYMRCXMDTQHCNLVTQDWFTUZGBDXSYSCWBRGUOSTBELNVTAQDMKMIHMOXQTQLXVLSSSISVQVVZOTOYQRYUYQWOKNNQCQGGYSRQPKRCCVYHXSJMHOQOYOCWCRIPLARJOYIQRMMPMUEQBSBLJDDWRUMAUCZFZIODPUDHEEXALBWPIYPMDJLMWTGDRZHPXNEOFHQZJDMURGVMRWDOTUWYKNLRBVUVTNHIOUVQITGYFGFIEONBAAPYHWPCRMEHXCPKIJZFIAYFVOXKPASYIWXMRAHUWLAOOVREJHPBIIQMDPTEFNNGFZTQHHIFMTHLXKQBHISDXBGOTYSPNVUSLDLFCNOGNDBCJXQDUSSOEGPWPRFUSSJQHKHBHPHTJKYWSEBAAVJAUPVDBXFITSYOJEVYCPXWYXFKZDESBNOACIXWTRHQHFIMUKKDINHWYXNJKMOPBHOPLFMPLQJYFIAZKXXDMZBNDUOAXJDAEVIBEQACBDXWRGSFVPLKHFPNLPFLZNDTLUWRIGJJTTHZHPOWRYLZZYVNATBAWWXBYDUUSBDHBGGAWQVLRBMPGKNZVLKEEAVEKLVQUTZZDRQONOWWVWJFXXLTXMXKKPZKYFZSVYVKVNYCVPNPQBRIBPEMMAYFPNIWAZHBJEZMENVESSYPPASIFGSSFWVEUXASVKMPXZVZOOPTVOZCYQPXANFTSVGLUXXMWTERTADXMAMTXRDQNPLOAGMMGETHVBNEXECQIDNZPSZHLHPSOEMJFRDPFAWNFHYQUWIWNUQZTLHKLUBMJMQIMOYUMBUPRIGZZXVKJJOXHYUSUKLAIYMPOPZYVEWMVQMSOISXZUHSQAZGGGNMRUXDKVGPUCMTZOSJLRPDWAEKOXTRAWMHIJIZUQRLNKIEYLAIIYMTDFTXJUUCJIPOZZHGBIZWMNCRCABVMQWAFVMUXYYBVCIURGYAPTMPVLCNYUHAYTABVKSPWISDSDSPXYSOPDEMQDGQAXUOOOMPKYSOKVZZHDPMVNURNAULFUTCUKWGTXNQXMUKBXNLIDVYSEWBWMSNSRFPXXFTMJUEDKSDMNBKLSRNJPWVPQWMXXTFFGTBDBJIFNRVWZTBDJRBAZXOTGFQVYQPGRDOJJGJVQIWLDVJINOEEBSCJCISYVUTVHVMIYCOYSZFEXXAFMKAXSXWKTFCFAILJABWUNYLERKSNHSAQNHOVLTHJVSUMBZQSJHRLLOVOYUBXMXBYUNVAADRVBEJOORBYHWUNRHNIXRHWODLXNGPQURFPIQDFTESWNRNYFNRLLTCTMJVSJXPFQSGPZEQQTREWWSCEICEANFVODTIOKDWTZOQOBOIIOXGOMODFASZWZGUZZYQITDDCINEMYPCBFELHMHYPBTBWMCHQHYGFTVAOFPXWMPMFBCFNCLQEXJGVZPQBXCQOSKJDXWHIMEUWXOPZAFASCSXAWAROBLPMAMKLRWLZNPLGSPUZVNUBPUDIBPTDSLAAGXAAACQRSFVHCLAEDSMLKJAQSOQGFPOVIGXFVHLTPWPTOJSARDOZOGRLTULBERIYWIREEBJDDKDHPYLEYPYLEVVGLKCKUBMYGXZQMEEYEHJEHKNBKPRSVDGJOIZZGJSZEBTAQQGZWYFGDCBKDGXZURJPOAHRHDPQEXZSRPGVDUTABOGKWKUEHFZWHVAMSNTZUVCRQZPLXHYKIAOAPJZKZNMLSNEZSSKDLOSIYFAWAZNBUWENOVCSFKFUHNTGLVESXSRRNZKBHZKHZMVKJEVSRBDICLCKMSGPGNGYCKZVGYSVWCGWAYJOKQACTFXTIVFBDWPRUFIVTGGZHBPVLXFKISDNEOGDSEENJLEWROBJHPPPJCZYXEAIQANAZTKSNPFWYHDJVIPGWZZNMNNXWRAIIEICSCDHRYZVRHTOPRRATXUFCITHOKIOGUDGGZPVJCTBAHNZDWTOKIATSRIQZWEDRRFZBRKGVYNBBFOMOIAWWMMJIQVHDLNSVWNWBKTEHYKEVHACVDFLMNKRLJMIJVFXDVDYDMVKJSBPMCGMNFTSEUMHBDIOHZCJVPAYXQWDPYCHQCTUDLKEDTBJDUQBZWXVOXJLAJSTAOQNRRRPXCNDMWHLWDYGNNORDXMUJNZLKEAMDXANOKVBVPLRWXZIJPJKULODEULUEPKSLYIUZYWPYYFOCICAZYEWQYULJLFMTHLIEOLXUYPKQPEMFJJPSWULKNGYTFFIXVOIYUUSYBDMYGPUGZHUERHLFELEMNNAVEFSUQIKNYEDQTXYEKPWPDPCUUIMOSYTASPBMINXPVBCBQOLOSVBRPPGPYVIXLSXHQDRPHMJPIHERRWHDWOSAPJFTERGJSZLZWCIHWCUEGFCPSAQJNNFFMVVEUPTMNEFBHOHJBCAOCDWJYAYLNVZECIUCLQUQEDNWKYFYMGRFMZXQPEJCIXXPPQGVUAWUTGRMEZJKTEOFJBNRVZZKVJTACFXJJOKISAVSGRSLRYXFQGRMDSQWPTAJBQZVETHULJBDATXGHFZQRW';
const huge_b = 'FGAKWMOAWLZQJYPMHLLBBUUHBPRIQSNIBYWLGJLXOWYZAGRFNQAFVCQWKTKCJWEJEVZBNXHSFMWOJSHCDYPNVBUHHUZQMGOVMVGWIIZATOXGBLYUDIPAHFBKEWMUNEOQHJMBPDTWNZNBLWVTJRNIWLBYBLHPPNDSPOJROUFFAZPOXTQDFPJUHITVIJROHAVPQATOFXWMKSVJCVHDECXWWMOSQICZJPKFAFQLBOXOSNJGZGDRAEHZDLTTHEMEUSXHIIIMRDRUGABNXWSYGSKTKCSLHJEBFEXUCSYVLWRPTEBKJHEFSVFRMCQQDLANBETRGZWYLIZMRYSTVPGRKHLICFADCOGTNIGDRXASLQUOLBTOMEFRTOCGSYYXMMSOESSJMKVHSKPLOEETLFVCJLILCEMZWTVJILGDVBVAFAEQQOJYPXJDYXDZXBTKCCESYMPAXXHZCAQJDOIXJIIVINPIDPFJHVAVBWPCKQNCJWYGBBDWBQJVDEHKEVSNTANOWLERSAPPRUOKYWNEGNCMJVJXCSALRMIUSZJMKAPBWDVDNJXNXRNLMIRLMEHSAYUHJPAJKUXSYRIRKPMGZCYUPOIGWSDQSUXMAIXWSQGVLRJZFCQRPHSBGRSFNEAIJELHYRUMKQPKQKLSACNHPZNPXZSFGMCOUBKPCWZMKMAXJYPVSWRIGSVQGOGOQCIVAZSINDEHAOZDDWXTTFFSHOVPVPOLDLONLKEGGVXCYQKABPWNRZEJFDOPDHXKOQSPEVRRJEOCHBDFQBVCOYVFFVZAUUFRROHJTXNJZPMKDKJBFQFLIVIGIWZTGBYBUGIFDYHOJTJKOAQIEHKJMATGYHGKJUMWVALSQMCOIIJVWCHNENIKRLIZWKHKTDXTQVXIBCTBNBXFUDIVICNLJLNZPGHKVJCOSVFNRYIPIIYLOTXANMKCLJVYYCMRTSCNDZIVGHXAIGWXSKRKSQJOKVNCECTSFXPGYORKUFSAACIQGNCVXTGHWTPBNFSKRMPZCYMXUGWJDILCORKRZPUEWAHXYLCGNZKSUSRAUPTYMACGTSTKDXWYGKDRGGMQKOMLRWRROQFNZPVWOCUAGGXCVBFLAUQXQBWTFYHPEYFDPYDBFANCNKGTYOMYHDODVBIQNEQFWSVYFRPIJYGJDUHWAGGCWZIDPHKRWYJCQGZPSRLCJUYBMGAORPPYFFUNUONATQSEYSOUBMIAFJBZXUIWSZUOVQEWCOLEJFLIVCKBBWDJGMZVFKXZXFDCXBAYMMNTIELKJNZKODDCPFEPDQHGYRAWGYMAMLJWNBIEAWIUFAEPOCJMCSOYNMIUPLAEKAXEXIYJFHHGXEQPXSVIEVROOOPKWNVXQAZPXLDLYEQWDUIQURNWSMXXARZOAMPOQOXCMQGAMIHMSRJNRLNIJTNZXCDYCZMYFRUWSFKVXVLJUPORLHZEQQZRLYDQLXTGJMXDSTCRABJCOPYBQYBAALILYZHYSADROQIJFHYVGZUFDLRZGECMEQTGKFGIFPYIEHMCGRPOPMOZMAECXFPKWZEUALGFDMDEXMKSIPYMEGERUXGTGANELJAMWVTXFQFCEHNCNHXAYVDRKWPPXISCAYKVMKYJKJJGZIDBATJUJGDCSOQNLXGXXDEYEWHVTNCVPUSJINBRRJCWFXCAFBXPYTBEYPCOSWMPDCBDCMJSFZYOOHDZYUDJOUKIOWFCMHPLICCYHIIGRNJMXYAFNXNFZVNBNSXBKAMPSWFMOOFLQWWDNSAJUZISGRZOZDGNHHUAIBGYCTPYQHCXCHHYGIHQAERMSPSGOMQKYLTMRFGQBDHILOYXFITYHEWGMVCAKCXUNUXOGDVURUMQOGWLJLFHYSYJVVEFPKBYIBZEQFJHZYMHDKDZUEQDHNYVQTUNONRXJNFBRUKWLFITFMOVPQNROHZNPYFCOZUGJYBLUVNIQUKMSWCWSRIWFQNHOTBAYAEQVYPHRKWUTQICJOWQMQNEITNCVUAZZNJOJVLTIJKFXGMUUXQAYPFTSRHSIFDBPPEVHQEDZPWOMZRSDEJWFSUUXEWAUMEYNNLQRKNKOTNCFKNVZSGBKEECUVNQPEFKGBIDLRSKWXIOCWGRAIDGDLEDUTXCLALKBNJNWMGSBOTNPGRVZQRGJKWPKADHCSCCXYCUKRESWGWZYJORWCBOKBMKPFTUCREJBRLPNQHMCCQJNYVEGKVPEATDZWCWABGKZEKKDYFGUBJDFDJNILUMMWXGVHHCFGRZINRODTIDTVLUOBAWQMXEAMUMKSCVLHMIVFUBJCMBLWKOXSKIRGQGNILLTZTIEAIPFRRSHTQLHXXIBAQMQHMBKAIMRKZVGEWNJPEVFQGYWZPPBIEIGZKKMPPLSYWCOFXBLCYJVESUHOVQVUYGOLNPQFPYRWYIUBIWQJDJHVJNTTZFNJIMRYVPYHOFLQTFRRTLDUJWPINXMJMCMWZMDLUUBVWSPACMHCWANDVPQYIQTOZIPDDJLATRPRDNYGMBAYNLFZMBMTRYTSQSXSUEJLGOOQEYUCQVJFSMHXMHXBCBDQSKZNXNNPHSOQJFMAQKLCMCKFGIESZPIRGOTZGVLHINLOGMTFNRQNXOBYLZDDFYFPYTCDEZITDUQHOZQXQXXTXGPZKKBXMKUHDOMJNRFTOJTRFYUPNVUOJDBUYCZOAHWVUUVVZAPUNXUYPBQQXRYAHDFHFRJSXYUKJFMRUWPJAJJCVJBKXPTGQCYXDCVAAJMDHKBAAXQVZIGYBWNIUFUCUCBZTNISVHQSZVKTILNAGLUPTRWDGTCDZJJXCNWESQXFFBXYUQMQVYDZSRUHXEVQYMJURMJNILNRKEEPDSYYSVBAEKSOZXFNZXEWJRVCBOXLJNXJDXGFHTGRDXOHNJTIYNSPKWGTNXSXJRIJYTXLCASQPDLJZLNXVPSBJQEKRUNUEHMHNGYUMGJHBOEOBQNLIFESKIVABBAEPUTXUURWPOWHFUSACEJXOMOSQBOMLEUGDHZLVTZVJKZPFZYCZIVPIOARKAXAWRPXYZOSGLXXLPWNWNLZFJDLDRFFUDMYWWPJTLKXMOIRWVOLEKXPMYHDYJAEQWKNFPAPUEGIRCDOWKUSEYBNBRCWSCMLUGZFKOVXYSYPZEKEEDCEMNKIHRYLIZMAKZWCDHQDXFKRVSQFHCLIUBNUWCJKDGPOYNPPAGPZHMMOVFURADZEMPDWJFVVTGMSALSWWBVJAHWERCTOEZQYYZOSXHIJGKZKSPPPVVLJVEDHURQYXRLHTEZGPHNBPUHGKMRCLIVKHNZTOXSEJNOEPWPAJUQRWZXNOWQXQPJBXZSYBTYAFRQTLECKZUXDLWOUWIJCGHHGNSOWIJQPHEMOJMZAIEORVNBNSWIUUYYTMUTIVRDUPCGUVSGNGMQWWSKXGLDLVDRMMAQHCZCTLDSRYAYGNNDFGJGNUALNZRULIRVGRHHPSOZMSTVDJCSMAACHWIGJSCNAPSUMXPZLLLVJJFOAMEMXUUTILACVKECCFEZYWBFTNBWYJTYBGRJTQCKYTLHDZZUWQKCGESMFUCYQPJLQXSJRJSNFUWBDCDQSAJDIMLRCVTJCXOETTGXXJJBCNWUNUUYERUOTKWXKXCTOVEUNECFRCWVYTIYTUIWSVWQWPIJISKVOQGYEYORJHDSKBCATYUPYQPBXPVTLTUDZMIVFLMFCERJOPFQFWTJCYAZCGRMFDLVLBAXDNNBXTAOSQRGJERNPPFRMAXZJQCPQMQHMSIRUQEUXXVEVDTKBGHFVPNIPVGLDDRRZQWOHCPYAKJCXKBOPXMXJKIAWLYIBCDHBXEUNRSVHWSVEYYWAWNFPJKPBCPSSADRKYQVSJRQBYEBEBCBAAEJCJNOYVYRCJUNQYAGAZPGLNZYRZWMOUNBIIVRLFALQDKMIVHIXJQODZCMCGUQQYXTNOUARYQCMAEIDIQVRDUELOHDQBAGTNMIWEUGTLGUGDBGXRIKEWSVURSYBMOTAOOCREFBNBLEVNTPELPJKUOYHWQJJRIVBQWZVUZWOUBMQBOMBBGQBFXHWHIYBFKVURXXGKONDDFORJOJTUTTNSDRLICJRQSSAAPOWJZUIFXQMSVXQJNNOXIJPWCMHGCBIGWDADEARLEAYZOCHOCEGGMOPMXQSZWGEVPGJISNXEPRDYQQDFFIOAGLKBVXVMQOBEAXNFVERARXQLPTSVRNETGHETGLSKMDXUVOOCGPXLDYKTWUJXBBUVLNFBDCFCXDVGXVBVLXCQKCODATAEUHVSKLCGCWHSJWWGAZCZVZNYZRVHXETFZZAWPKYIGZATNXIAVEVWFJUONOQDSKGSNDFXRPDSNGZOFADTEIZSBIBRRVUBFANKRBKPXNJXQPIJMKSNJRTYFLTREYENPGSAITRJDLEYPOTIMVWOXNVOJZXBBNTNUMOMGZLIJHAFVZRODTNWETXETDNXQQRNNNGQITRTFQTUVMHUDFEUQPWCTKVQAUTEAZSJUCFGPLKPGEZVDHWVUZKBHBIDBTNSHGWPFSLNWJGPBPTAQYLIBHZFYWZUSZPACXUKBZWOPDRKTPYWOIRJWFEKXONWBYKSTQUKZAJLUJJULEQORUFTAFGNKISKXKTSASSJRRWPOCEGOWQKSBSZLSVSYGALCPESNTLDJGRAKLQZNGIQYNIFOWBGCTQVAZPKUULWUZYIMDLSGKONXBYYTNTZKXFTIJJRWCRSEKWATROTURZPNOSLDLWPBOGGNJCWTFOPDHQGLLWXRYDXERNSFECYJIXGWVETICATGAIJQIZLKGVHLHWSGLHEGZIYUOEQDOKCGBQFVBRNHHSBEPDYKKYYGEUTUIFLJAZBCNXISFCODIQOJDENGXJQFLODZVNEENRGLAVZYNYHSXRGDIQPNUSNCPYDZJQKTYELPGMSBKLVMNLPGXCIENKRBJUWCMLLBKPRLUFJLJOKYNPPXBKYISXMMANLXUYEIDFZVEFWWCDKRPIIUTRWMINFZXGETXTTSIGFKGOFEKPIUWYZFLPKLBIMTOFJPXQKDQYAOIWLWMJAKZVHICDMYHCXGERYPPFGVHEPIMGRQOLQYIBJPHSJKMDKAQBKYWTBQEHRMYBEVNQUTDLYQPOGEMUUDZXBHJLBGVDNZUNUBUEPBCSJBPCYDEHBRGJPPIQEBGXHDTQXWIZICHYTSCEWAOUDJZEVUODGDGQFDZVRBOXOPVFDBOYSKOLRVDFOIRKQPIWOWGYPYBCHBMWTBEAOLSRXQCOXWNTBYIMAJFPAUYMWJWIBOTKZIUTTJQCNHUDHYLQBXRBXKVMUDTHUTQQENFNCSHTAQSWMQUCJVUZCETVNQQJSSEBSLRICSVMWQAKEZGIRYRHLXPEUGVSBIPCSMYMHULYKRIYHDMASFCJUIGRWJCHMJSLMPYNEWNZPPHMUDZCBXZDEXJUHKTDTCOIBZVEVSMWAXAKRTDFOIVKVOOOYPYEMIIDADQUQEPXWQKESDNAKXKBZRCJKGVWWXTQXVFPXCWITLJYEHLDGSJYTMEKIMKKNDJVNZQTJYKIYMKMDZPWAKXDTKZCQCATLEVPPGFHYYKGMIPUODJRNFJZHCMJDBZVHYWPRBWDCFXIFFPZBJBMBYIJKQNOSSLQBFVVICXVOEUZRURAETGLTHGOURZHFPNUBZVBLFZMMBGEPJJYSHCHTHULXARZHIZEIOEPWBIZHZKBDLUYTBVWVQIPIZQCWCAJKUFNQHMCRMMXZBLJPLVPXJGEXDFZLLNNBUGBMCTHSPXENWOVYWDFCHIDWCSTLBOCFZZYOCNMGAAUJTRLQSNIFLVEHWYIPPBXHVUIFUJIFKWLTVJBKGQPOOPTXEMXKRXOIHBOKYPCIZINRXTBRAXNMHKCSSHGUUATPPFHDHNWPZUKJYBKKVRMMPUEEHKJYRCRKPKHTBFQPYVRCFQALHOIKWFSQFSTYFPRAAHXHJXVSSCNGGGKGNHWHEPGUYAVZCFDKQBCMGROIDXRZYYNHWCDIUSRIQSAOWCZWUUYELCXEPXLWDCKNMDXAUTBDNRAHITQISZNXNISYOORKEPOPRZKLKGKHESPPLQSSAIMTLLTGAFHVLCCIZTDIDXPWHDGHOSCIGPPTAURARUEIHXOOOTZELVQBHVOQIOZHSTFXPWBFMGLKICKRGWOLHOAKATSSJLITQZJFHDFZLMDADKYPRFJSITGVQAIOFZWNKPRYCKXSJOZUINKHUFNWHJCYANIRDGWLFWUJGZCFGRLNKVYFOPQZTSUQSHDTKDGBRRKXWQPGLIPCAASJHKLYPYUURVGZBFAGBNQJWKSDMGDPFKDGQYGSEMVFITDEILCYDJNHUPZVEASVKJXGAMXNTQFZNQKMSOAREINWJEIKYORROZGFZHOYHMKUPVGURWSLCQSZRMOAORLUILDOYUBSXOYQZHCBRGIFOQRGXBYCQOOQDZMLTUWIQGFULDUPXAVNNJTRELAQIKMVGRPYSHCSTAHTZDBRVCHPTOADVZUAIKCSZEGAROQJNJHMJCUMBXGSZKTQFRUOSTVEVHHHECIOMZZKFFNHMLKYETBKVNVDOIMAKKOLLYUNRCNQUDGAZMEJGOAHKJAFILHXVQYSSVATIGCJZXIBTIRITDILDTFGGBYZOBBMXTWDAJAWQDYWNPPFLKKMTXZJVXOPQVLIWDWHZEPCUIWELHBUOTLKVESEXNWKYTONFRPQCXZZQZDVSMBSJCXXEUGAVEKOZFJLOLRTQGWZQXSFGRNVRGFRQPIXHSSKBPZGHNDESVWPTPVVKASFALZSETOPERVPWZMKGPCEXQNVTNOULPRWNOWMSORSCECVVVRJFWUMCJQYROUNQSGDRUXTTVTMRKIVTXAUHOSOKDIAHSYRFTZSGVGYVEQWKZHQSTBGYWRVMSGFCFYUXPPHVMYYDZPOHGDICOXBTJNSBYHOIDNKRIALOWVLVMJPXCFEYGQZPHMBCJKUPOJSMMUQLYDIXBALUWEZVNFASJFXILBYLLWYIPSMOVDZOSUWOTCXERZCFUVXPRTZISESHJFCOSALYQGLPOTXVXAANPOCYPSIYAZSEJJOXIMNBVQUCFTUVDKSAXUTVJEUNODBIPSUMLAYMJNZLJUREFJGUTAQNROMYMIKEFRFROXCSXRKXPICTXGVLERNYTEFLNCIJHMLISLUNMAOSOMKSNMTTOFLZQLXDDZBFFTUMVXLTYDLONVAOCDEZWTPJOZMOWKQWCVFTEJHXUTNHJRGWSNBYTSGTIGOMKNGTMNAYTTZNCQDEWYZXWSOIESHPDAWCRZHBLLHLXLIXGIHZTEYFAXZICQWHABLKKHCLXHFOQBPCXWXPBVPAWLNFNATOFEKRBXSFGEJTCDQKZEUJUNFCUWEVYAJBJARUPRXSYKONESFURJQFGBXHTYMDQQICWECDLCSREWZIYNZUWNDNATNSWIGTQWMPLHTCQLCXSUNZWYACZGWVUEMAZDGDRCFPXNLVDZVAUUZVTXAHLRXDBZZGORUGJVMXEUGMYCUBKTUMWGRRWQILYUBVJIBGHOGAZNUBGQSEYSWUNVEWTCRHNIKGEGLIYJICZSEKYMTQZTHXQCEHSEZBHKUFQGMGROGEWPMRXLQWNINOGKYZXNIRLEGLHRKAFLJAKMKUYDGLAMGUXUCRWSYCUUOIVHYWYICDQUZGHGCYSDXMFADGFYWRJJSQMYCSDXPRNURIZKJVVRHPMCMODFSEJOEETZKKJFTDDMYSVXJXCTTLZSRQKRCUHLIUMYXZXMPKVFHTGTUIRIPAQWZKCEBKTAEUIJBTANRFTVKPNRNXCMFUMOTRNENQIWSVGJOBTBKHKATMITBNXTNSKLVILZIXLGMUFFLRQGFTANEXECPTWYGAHZICXTTRJWIYKLIRGHYQMLWYJDAVEXJHVZHRLPKWFHSQZPRGIRCVVSHSDMQYCWHJZANIHPDSVMWVJQTSLQELNWXTOQFVIVIRNIAKTVZBMVEWGHUACGVBGSHVKWGVRKEDNGMADOCZXKUPWSSPBCHWLGFMUEYTURFHBHZDUAYMBAWLRFJDFHMMOCROUSWMPYXFPXWWYXYKJUVOCTGKZZIIUNYTVXHKJRFDSQNTSJUDLMXJLKWIAQEOJUEFCCNPJYIXMZSMHQQJOTEODIATBBSRVBBVLTH';
const huge_result = 'FGAKMWMOAWLZBMWEYYDIADTLCOUEGMDBYFWURPWBPUVHIFNUAPWYNDMHTQVKGKBHTYTSZOTWFLEGSJZQJYPMHLLBBUUHBPRIQSNIBYWLGJLXOWYZAGRFNQAFVCQWKTKCJWEJEVZBNXHSFMWOJSHCDYPNVBUHHUZQMGOVMVGWIIZATOXGBLYUDIPAHFBKEWMUNEOQHJMBPDTWNZNBLWVTJRNIWLBYBLHPPNDSPOJROUFFAZPOXTQDFPJUHITVIJROHAVPQATOFXWMKSVJCVHDECXWWMOSQICZJPKFAFQLBOXOSNJGZGDRAEHZDLTTHEMEUSXHIIIMRDRUGABNXWSYGSKTKCSLHJEBFEXUCSYVLWRPTEBKJHEFSVFRMCQQDLANBETRGZWYLIZMRYSTVPGRKHLICFADCOGTNIGDRXASLQUOLBTOMEFRTOCGSYYXMMSOESSJMKVHSKPLOEETLFVCJLILCEMZWTVJILGDVBVAFAEQQOJYPXJDYXDZXBTKCCESYMPAXXHZCAQJDOIXJIIVINPIDPFJHVAVBWPCKQNCJWYGBBDWBQJVDEHKEVSNTANOWLERSAPPRUOKYWNEGNCMJVJXCSALRMIUSZJMKAPBWDVDNJXNXRNLMIRLMEHSAYUHJPAJKUXSYRIRKPMGZCYUPOIGWSDQSUXMAIXWSQGVLRJZFCQRPHSBGRSFNEAIJELHYRUMKQPKQKLSACNHPZNPXZSFGMCOUBKPCWZMKMAXJYPVSWRIGSVQGOGOQCIVAZSINDEHAOZDDWXTTFFSHOVPVPOLDLONLKEGGVXCYQKABPWNRZEJFDOPDHXKOQSPEVRRJEOCHBDFQBVCOYVFFVZAUUFRROHJTXNJZPMKDKJBFQFLIVIGIWZTGBYBUGIFDYHOJTJKOAQIEHKJMATGYHGKJUMWVALSQMCOIIJVWCHNENIKRLIZWKHKTDXTQVXIBCTBNBXFUDIVICNLJLNZPGHKVJCOSVFNRYIPIIYLOTXANMKCLJVYYCMRTSCNDZIVGHXAIGWXSKRKSQJOKVNCECTSFXPGYORKUFSAACIQGNCVXTGHWTPBNFSKRMPZCYMXUGWJDILCORKRZPUEWAHXYLCGNZKSUSRAUPTYMACGTSTKDXWYGKDRGGMQKOMLRWRROQFNZPVWOCUAGGXCVBFLAUQXQBWTFYHPEYFDPYDBFANCNKGTYOMYHDODVBIQNEQFWSVYFRPIJYGJDUHWAGGCWZIDPHKRWYJCQGZPSRLCJUYBMGAORPPYFFUNUONATQSEYSOUBMIAFJBZXUIWSZUOVQEWCOLEJFLIVCKBBWDJGMZVFKXZXFDCXBAYMMNTIELKJNZKODDCPFEPDQHGYRAWGYMAMLJWNBIEAWIUFAEPOCJMCSOYNMIUPLAEKAXEXIYJFHHGXEQPXSVIEVROOOPKWNVXQAZPXLDLYEQWDUIQURNWSMXXARZOAMPOQOXCMQGAMIHMSRJNRLNIJTNZXCDYCZMYFRUWSFKVXVLJUPORLHZEQQZRLYDQLXTGJMXDSTCRABJCOPYBQYBAALILYZHYSADROQIJFHYVGZUFDLRZGECMEQTGKFGIFPYIEHMCGRPOPMOZMAECXFPKWZEUALGFDMDEXMKSIPYMEGERUXGTGANELJAMWVTXFQFCEHNCNHXAYVDRKWPPXISCAYKVMKYJKJJGZIDBATJUJGDCSOQNLXGXXDEYEWHVTNCVPUSJINBRRJCWFXCAFBXPYTBEYPCOSWMPDCBDCMJSFZYOOHDZYUDJOUKIOWFCMHPLICCYHIIGRNJMXYAFNXNFZVNBNSXBKAMPSWFMOOFLQWWDNSAJUZISGRZOZDGNHHUAIBGYCTPYQHCXCHHYGIHQAERMSPSGOMQKYLTMRFGQBDHILOYXFITYHEWGMVCAKCXUNUXOGDVURUMQOGWLJLFHYSYJVVEFPKBYIBZEQFJHZYMHDKDZUEQDHNYVQTUNONRXJNFBRUKWLFITFMOVPQNROHZNPYFCOZUGJYBLUVNIQUKMSWCWSRIWFQNHOTBAYAEQVYPHRKWUTQICJOWQMQNEITNCVUAZZNJOJVLTIJKFXGMUUXQAYPFTSRHSIFDBPPEVHQEDZPWOMZRSDEJWFSUUXEWAUMEYNNLQRKNKOTNCFKNVZSGBKEECUVNQPEFKGBIDLRSKWXIOCWGRAIDGDLEDUTXCLALKBNJNWMGSBOTNPGRVZQRGJKWPKADHCSCCXYCUKRESWGWZYJORWCBOKBMKPFTUCREJBRLPNQHMCCQJNYVEGKVPEATDZWCWABGKZEKKDYFGUBJDFDJNILUMMWXGVHHCFGRZINRODTIDTVLUOBAWQMXEAMUMKSCVLHMIVFUBJCMBLWKOXSKIRGQGNILLTZTIEAIPFRRSHTQLHXXIBAQMQHMBKAIMRKZVGEWNJPEVFQGYWZPPBIEIGZKKMPPLSYWCOFXBLCYJVESUHOVQVUYGOLNPQFPYRWYIUBIWQJDJHVJNTTZFNJIMRYVPYHOFLQTFRRTLDUJWPINXMJMCMWZMDLUUBVWSPACMHCWANDVPQYIQTOZIPDDJLATRPRDNYGMBAYNLFZMBMTRYTSQSXSUEJLGOOQEYUCQVJFSMHXMHXBCBDQSKZNXNNPHSOQJFMAQKLCMCKFGIESZPIRGOTZGVLHINLOGMTFNRQNXOBYLZDDFYFPYTCDEZITDUQHOZQXQXXTXGPZKKBXMKUHDOMJNRFTOJTRFYUPNVUOJDBUYCZOAHWVUUVVZAPUNXUYPBQQXRYAHDFHFRJSXYUKJFMRUWPJAJJCVJBKXPTGQCYXDCVAAJMDHKBAAXQVZIGYBWNIUFUCUCBZTNISVHQSZVKTILNAGLUPTRWDGTCDZJJXCNWESQXFFBXYUQMQVYDZSRUHXEVQYMJURMJNILNRKEEPDSYYSVBAEKSOZXFNZXEWJRVCBOXLJNXJDXGFHTGRDXOHNJTIYNSPKWGTNXSXJRIJYTXLCASQPDLJZLNXVPSBJQEKRUNUEHMHNGYUMGJHBOEOBQNLIFESKIVABBAEPUTXUURWPOWHFUSACEJXOMOSQBOMLEUGDHZLVTZVJKZPFZYCZIVPIOARKAXAWRPXYZOSGLXXLPWNWNLZFJDLDRFFUDMYWWPJTLKXMOIRWVOLEKXPMYHDYJAEQWKNFPAPUEGIRCDOWKUSEYBNBRCWSCMLUGZFKOVXYSYPZEKEEDCEMNKIHRYLIZMAKZWCDHQDXFKRVSQFHCLIUBNUWCJKDGPOYNPPAGPZHMMOVFURADZEMPDWJFVVTGMSALSWWBVJAHWERCTOEZQYYZOSXHIJGKZKSPPPVVLJVEDHURQYXRLHTEZGPHNBPUHGKMRCLIVKHNZTOXSEJNOEPWPAJUQRWZXNOWQXQPJBXZSYBTYAFRQTLECKZUXDLWOUWIJCGHHGNSOWIJQPHEMOJMZAIEORVNBNSWIUUYYTMUTIVRDUPCGUVSGNGMQWWSKXGLDLVDRMMAQHCZCTLDSRYAYGNNDFGJGNUALNZRULIRVGRHHPSOZMSTVDJCSMAACHWIGJSCNAPSUMXPZLLLVJJFOAMEMXUUTILACVKECCFEZYWBFTNBWYJTYBGRJTQCKYTLHDZZSZFWTZFPNSCGUEMWRCZQXYCIVDQNKYPNXNNPMUDUHZNOAQUUDHAVRNCWFWUJPCMIGGJMCMKKBNJFEODXKGJGWXTRXINGIQQUHUWQHDSWXXRXUZZFHKPLWUNFAGPPCOILDAGKTGDARVEUSJUQFISTULGBGLWMFGZRNYXRYETWZHLNFEWCZMNOOZLQATUGMDJWGZCFABBKOXYJXKATJMPPRSWKDKOBDAGWDWXSUFEESRVNCBSZCEPIGPBZUZOOOTORZFSKCWBQORVWDRMKLFDCZATFARQDKELALXZXILLKFDVPFPXABQLNGDSCRENTZAMZTVVCVRTCMBQLIZIJDWTUYFRXOLSYSXLFEBPOLCMQSPPMRFKYUNYDTMWBEXSNGXHWVROANDFQJAMZKPTTSLILDLRKJOYRPXUGICEAHGIAKEVSJOADMKFNKSWRAWKJXWCMCCIABZBRSKZAZJQTLKIQYDPTPKCSDGCQJSHZNDPVANNRYWFRNRGHLJJQRXPXNLKCWDPDKSWVTXGANWWYOOSXTNEXEEZJXOUYFJHNWPQFXEXZXFOLPCFBLPNCETYHTRWXKBOSCCSKXBUVCROSAVNPXZOEOYYGHBBQKFLSUTPWMHQWKVIRMLFCPIDLQYIKZMNTTAIFCBOPNWEZESOMKXHAIAFMVKBJAISYRBTULTPNXBCJMORNQUMATSERHIEQGGRIVOUWFNBNGHDFALLCPRVNGIKCAMVPRZAEAPQMILWKBKGOGOCNIAAISORFQXZJZTVCGVZLCEDWNEZBWXMPOBMRVXASKWVVWQUUDRNWHMMZHEQXIWHFUXAVLWFTGYXXHPYGSPVWDNVMGNWNPKDRNZNZVRKMJJMWISYRDKODOAFWSJFUVMEEWPDWPIYMWBHOXEBJIBXPHIEFGTSAWCDIVTLTRSHJQNKKMDTJGSCNOZMOJNHIGIPPJEMZZUWQKCGESMFUCYQPJLQXSJRJSNFUWBDCDQSAJDIMLRCVTJCXOETTGXXJJBCNWUNUUYERUOTKWXKXCTOVEUNECFRCWVYTIYTUIWSVWQWPIJISKVOQGYEYORJHDSKBCATYUPYQPBXPVTLTUDZMIVFLMFCERJOPFQFWTJCYAZCGRMFDLVLBAXDNNBXTAOSQRGJERNPPFRMAXZJQCPQMQHMSIRUQEUXXVEVDTKBGHFVPNIPVGLDDRRZQWOHCPYAKJCXKBOPXMXJKIAWLYIBCDHBXEUNRSVHWSVEYYWAWNFPJKPBCPSSADRKYQVSJRQBYEBEBCBAAEJCJNOYVYRCJUNQYAGAZPGLNZYRZWMOUNBIIVRLFALQDKMIVHIXJQODZCMCGUQQYXTNOUARYQCMAEIDIQVRDUELOHDQBAGTNMIWEUGTLGUGDBGXRIKEWSVURSYBMOTAOOCREFBNBLEVNTPELPJKUOYHWQJJRIVBQWZVUZWOUBMQBOMBBGQBFXHWHIYBFKVURXXGKONDDFORJOJTUTTNSDRLICJRQSSAAPOWJZUIFXQMSVXQJNNOXIJPWCMHGCBIGWDADEARLEAYZOCHOCEGGMOPMXQSZWGEVPGJISNXEPRDYQQDFFIOAGLKBVXVMQOBEAXNFVERARXQLPTSVRNETGHETGLSKMDXUVOOCGPXLDYKTWUJXBBUVLNFBDCFCXDVGXVBVLXCQKCODATAEUHVSKLCGCWHSJWWGAZCZVZNYZRVHXETFZZAWPKYIGZATNXIAVEVWFJUONOQDSKGSNDFXRPDSNGZOFADTEIZSBIBRRVUBFANKRBKPXNJXQPIJMKSNJRTYFLTREYENPGSAITRJDLEYPOTIMVWOXNVOJZXBBNTNUMOMGZLIJHAFVZRODTNWETXETDNXQQRNNNGQITRTFQTUVMHUDFEUQPWCTKVQAUTEAZSJUCFGPLKPGEZVDHWVUZKBHBIDBTNSHGWPFSLNWJGPBPTAQYLIBHZFYWZUSZPACXUKBZWOPDRKTPYWOIRJWFEKXONWBYKSTQUKZAJLUJJULEQORUFTAFGNKISKXKTSASSJRRWPOCEGOWQKSBSZLSVSYGALCPESNTLDJGRAKLQZNGIQYNIFOWBGCTQVAZPKUULWUZYIMDLSGKONXBYYTNTZKXFTIJJRWCRSEKWATROTURZPNOSLDLWPBOGGNJCWTFOPDHQGLLWXRYDXERNSFECYJIXGWVETICATGAIJQIZLKGVHLHWSGLHEGZIYUOEQDOKCGBQFVBRNHHSBEPDYKKYYGEUTUIFLJAZBCNXISFCODIQOJDENGXJQFLODZVNEENRGLAVZYNYHSXRGDIQPNUSNCPYDZJQKTYELPGMSBKLVMNLPGXCIENKRBJUWCMLLBKPRLUFJLJOKYNPPXBKYISXMMANLXUYEIDFZVEFWWCDKRPIIUTRWMINFZXGETXTTSIGFKGOFEKPIUWYZFLPKLBIMTOFJPXQKDQYAOIWLWMJAKZVHICDMYHCXGERYPPFGVHEPIMGRQOLQYIBJPHSJKMDKAQBKYWTBQEHRMYBEVNQUTDLYQPOGEMUUDZXBHJLBGVDNZUNUBUEPBCSJBPCYDEHBRGJPPIQEBGXHDTQXWIZICHYTSCEWAOUDJZEVUODGDGQFDZVRBOXOPVFDBOYSKOLRVDFOIRKQPIWOWGYPYBCHBMWTBEAOLSRXQCOXWNTBYIMAJFPAUYMWJWIBOTKZIUTTJQCNHUDHYLQBXRBXKVMUDTHUTQQENFNCSHTAQSWMQUCJVUZCETVNQQJSSEBSLRICSVMWQAKEZGIRYRHLXPEUGVSBIPCSMYMHULYKRIYHDMASFCJUIGRWJCHMJSLMPYNEWNZPPHMUDZCBXZDEXJUHKTDTCOIBZVEVSMWAXAKRTDFOIVKVOOOYPYEMIIDADQUQEPXWQKESDNAKXKBZRCJKGVWWXTQXVFPXCWITLJYEHLDGSJYTMEKIMKKNDJVNZQTJYKIYMKMDZPWAKXDTKZCQCATLEVPPGFHYYKGMIPUODJRNFJZHCMJDBZVHYWPRBWDCFXIFFPZBJBMBYIJKQNOSSLQBFVVICXVOEUZRURAETGLTHGOURZHFPNUBZVBLFZMMBGEPJJYSHCHTHULXARZHIZEIOEPWBIZHZKBDLUYTBVWVQIPIZQCWCAJKUFNQHMCRMMXZBLJPLVPXJGEXDFZLLNNBUGBMCTHSPXENWOVYWDFCHIDWCSTLBOCFZZYOCNMGAAUJTRLQSNIFLVEHWYIPPBXHVUIFUJIFKWLTVJBKGQPOOPTXEMXKRXOIHBOKYPCIZINRXTBRAXNMHKCSSHGUUATPPFHDHNWPZUKJYBKKVRMMPUEEHKJYRCRKPKHTBFQPYVRCFQALHOIKWFSQFSTYFPRAAHXHJXVSSCNGGGKGNHWHEPGUYAVZCFDKQBCMGROIDXRZYYNHWCDIUSRIQSAOWCZWUUYELCXEPXLWDCKNMDXAUTBDNRAHITQISZNXNISYOORKEPOPRZKLKGKHESPPLQSSAIMTLLTGAFHVLCCIZTDIDXPWHDGHOSCIGPPTAURARUEIHXOOOTZELVQBHVOQIOZHSTFXPWBFMGLKICKRGWOLHOAKATSSJLITQZJFHDFZLMDADKYPRFJSITGVQAIOFZWNKPRYCKXSJOZUINKHUFNWHJCYANIRDGWLFWUJGZCFGRLNKVYFOPQZTSUQSHDTKDGBRRKXWQPGLIPCAASJHKLYPYUURVGZBFAGBNQJWKSDMGDPFKDGQYGSEMVFITDEILCYDJNHUPZVEASVKJXGAMXNTQFZNQKMSOAREINWJEIKYORROZGFZHOYHMKUPVGURWSLCQSZRMOAORLUILDOYUBSXOYQZHCBRGIFOQRGXBYCQOOQDZMLTUWIQGFULDUPXAVNNJTRELAQIKMVGRPYSHCSTAHTZDBRVCHPTOADVZUAIKCSZEGAROQJNJHMJCUMBXGSZKTQFRUOSTVEVHHHECIOMZZKFFNHMLKYETBKVNVDOIMAKKOLLYUNRCNQUDGAZMEJGOAHKJAFILHXVQYSSVATIGCJZXIBTIRITDILDTFGGBYZOBBMXTWDAJAWQDYWNPPFLKKMTXZJVXOPQVLIWDWHZEPCUIWELHBUOTLKVESEXNWKYTONFRPQCXZZQZDVSMBSJCXXEUGAVEKOZFJLOLRTQGWZQXSFGRNVRGFRQPIXHSSKBPZGHNDESVWPTPVVKASFALZSETOPERVPWZMKGPCEXQNVTNOULPRWNOWMSORSCECVVVRJFWUMCJQYROUNQSGDRUXTTVTMRKIVTXAUHOSOKDIAHSYRFTZSGVGYVEQWKZHQSTBGYWRVMSGFCFYUXPPHVMYYDZPOHGDICOXBTJNSBYHOIDNKRIALOWVLVMJPXCFEYGQZPHMBCJKUPOJSMMUQLYDIXBALUWEZVNFASJFXILBYLLWYIPSMOVDZOSUWOTCXERZCFUVXPRTZISESHJFCOSALYQGLPOTXVXAANPOCYPSIYAZSEJJOXIMNBVQUCFTUVDKSAXUTVJEUNODBIPSUMLAYMJNZLJUREFJGUTAQNROMYMIKEFRFROXCSXRKXPICTXGVLERNYTEFLNCIJHMLISLUNMAOSOMKSNMTTOFLZQLXDDZBFFTUMVXLTYDLONVAOCDEZWTPJOZMOWKQWCVFTEJHXUTNHJRGWSNBYTSGTIGOMKNGTMNAYTTZNCQDEWYZXWSOIESHPDAWCRZHBLLHLXLIXGIHZTEYFAXZICQWHABLKKHCLXHFOQBPCXWXPBVPAWLNFNATOFEKRBXSFGEJTCDQKZEUJUNFCUWEVYAJBJARUPRXSYKONESFURJQFGBXHTYMDQQICWECDLCSREWZIYNZUWNDNATNSWIGTQWMPLHTCQLCXSUNZWYACZGWVUEMAZDGDRCFPXNLVDZVAUUZVTXAHLRXDBZZGORUGJVMXEUGMYCUBKTUMWGRRWQILYUBVJIBGHOGAZNUBGQSEYSWUNVEWTCRHNIKGEGLIYJICZSEKYMTQZTHXQCEHSEZBHKUFQGMGROGEWPMRXLQWNINOGKYZXNIRLEGLHRKAFLJAKMKUYDGLAMGUXUCRWSYCUUOIVHYWYICDQUZGHGCYSDXMFADGFYWRJJSQMYCSDXPRNURIZKJVVRHPMCMODFSEJOEETZKKJFTDDMYSVXJXCTTLZSRQKRCUHLIUMYXZXMPKVFHTGTUIRIPAQWZKCEBKTAEUIJBTANRFTVKPNRNXCMFUMOTRNENQIWSVGJOBTBKHKATMITBNXTNSKLVILZIXLGMUFFLRQGFTANEXECPTWYGAHZICXTTRJWIYKLIRGHYQMLWYJDAVEXJHVZHRLPKWFHSQZPRGIRCVVSHSDMQYCWHJZANIHPDSVMWVJQTSLQELNWXTOQFVIVIRNIAKTVZBMVEWGHUACGVBGSHVKWGVRKEDNGMADOCZXKUPWSSPBCHWLGFMUEYTURFHBHZDUAYMBAWLRFJDFHMMOCROUSWMPYXFPXWWYXYKJUVOCTGKZZIIUNYTVXHKJRFDSQNTSJUDLMXJLKWIAQEOJUEFCCNPJYIXMZSMHQQJOTEODIATBBSRVBBVLTHZZZBCVOYPLXENFFMFDZDIOJUODGBULVIVHTBHAYEEEBIACTYAOVQBIVUDYDGXWSGMHLRACAAYIPSOJLEQHPYGSHCVXWWLNEBLFMNQGDDQPCJXZFTWRLGPTRKBKRLWGSNLCAUDZDUJBBQLFZIKGXOHVHTUVCJMMWVHKXCGYEKJKKLCJQONEPPYDPSPIWQBKPSUNEDQIXLSIFCOKFRCVRSZCVDYFWUHTZPTBBNXBHQJOMXRBHJQXVDASERFFCVKECQYLQPRAWYQUEVHVUZCVFMBEWPXICSKPMZSBSUSMADDQKWGFIRLZZBCZEGHMUHXNXEJRSPCVQEJWOWQSFHOVHCTWNHUUVEPRRIYFWSTSJDECYYFJBJSDLEGQLKLXIYRWVLPPOMDFDTVTKWOKIWWPEJXIBDKNPONPSXRYTOQGJRTJPATMDLHMQEGVJHVLEHSYKRLVVSSMAMBZUSXUSZYYBDRDVZDBEXSGLYOKVMYKIFWGFNCSACJLKATHFMNLCTSQEJFOXYVMTOTTLHRLYPBZISUCLLQGAAITMXPMFINSOWJAAWSNMLUIZVPJBEWQCIPCQWVSQFBEUTDCSDRVIOZOBDYTWSIMSEETQCKLNKXTAWOXIYSVZRAKQEISPNDDXTNFQALSWXSMKSFOOIWXYNAMDJXNSMKIEWKWDPZJPKIBCBBMZBIWPMJCZCEHTCZQJZLKGYVSZPUUVETDFLUUHXPEOPUXMDYLAYSTTENJMCEDCUMOEEICJTXKKVXCXJOWRCVLTTSQHWKBBMIGTQLOVJGVIYZGCQJVPVOTWUCSETIDICYHTCMAJPHXYYOOEOVUXVUPLOKLPBOVQDWDYPBXGAJUQWADGEEDJKGURHSXDVYLMYFJQLWZLDROUYLQOBSGEMWDOIBQVCYEDFVQOPFHKQMHUSXQACOOGJXCOXBFZLWCXFVQAAVFEGKCIRQQGDYHLJMAQZQIFUAOUBUKYPAVEBVDUJGSULAHKPRFPNZQAQGVFDXWTQFLCEILPMSZIZFWBONXPLCYQITTPKPBCFSESGFBIQNIPOLEFRELPHJTHQRZSPHBNUMGRIFMWIZTFUHQIBGAXDVYSYVGXLSPMINYKBYUMEPUBRXUOAVYOVDBIELZDOBGQCJZNJBEXALKGHYWIOXZBVXZFCSHCOZMEFWCRVYIBJDFQVQMHXDPCCJODLGVKPLRFDEDPZOPRFEECHWSZHVCDOOEJLCHCWCEKTFRDMOWHSUEAVBRAWMIHZSNFHRAFBQEAWDIXZNPPFWIEAIVTMPQZQTSVNVWJMGVHUESSSAXGMOYWDGVWIOUZUQDEBIJCQYCFTAFTUWTGXAVEMCIUQMXENPRPMYZREXSHNVTESSTWHYTMATXBUZXPSTPYGFXPHPFCKJDBFBXIMEESWYNDFHOMCNWJTFRUVZWBHLZBVEBYEUCEPGCDPMGHCIBFXGRVNACXWLOPXSVZCLWYMWDMOLJTAGUWUVHXIFDJQSHLQAUEGLQRBXUWPOZFVEGDPVNWMEDXBMXAGIMXMXGJLNNFKWBRQSHXFCANWPOFLQEJAFDKTNLPGVLEXCYGLRZBKHCMXVUOBYXCXZXQMLSWVLMBVCSDTEFCQTMLILWZTBSCFHJTCYTONMLIIVRKBBLVNMHIPRGERYRPJPJYKCHNEYFYMIEFYMAJRNWJSLYTBXMDUWTFZAFKXYFMCNLJSEBZLEYGEGUUJMKYYLFMMVVILJWGCYHRDLDKZFZGTVMOWLBEQTJSODVHBUUMEXPPCDXQHCEQLDFAVGQLVITUZZNGJEOTBKJZCRTGGLUIAMNCORBKIWDOZITQGQIPHVWUIJWHSMGOGXOMLUQURCWOGGHHJJCEKGGLLAMQGXHCFCMRAKGROJGXIZWXASCASINZXCDXEWCULOFITYLHXHZXMJDLISUPDYLSHAHCIPZOPTULLYISXSCZJQAWAGNNGCGGIWKHNARJISVCDPZGGTLLUDVCSJXEUBFGYJDIMTPFTGYTKFNTYLNFLBFUTSYOVXMLIGOAIQZLXWFRSLJUCDXSSAMGCIFDLJASHCJJWHLKQNIPXZJGLPTEDZXMTHVZGRUHHCKUFDECAKRRZOQFQCDUZHJSDASKQGLQLNNBKUUYTQTHFCJRAAWTBCCURPZPUMCSMQHEBHQRFIGAMBLZXYCVEVLUZCUQXVRJGEKYAOFVRVCOHLDAVKJIYKHCCMNJPDHKKIMPSMVCYQXLGWLBHLDKJLZWTHKFNIZEBVLGOZRNWWVXDCKGNCKQTKQIDHOOCIWRPKXESLDTGXTAURGLBGMPYQLPZBNSBZHANBIYPUZIQURWRBRBXMHBRDPDRERBOBAJULDLWRPKRTFBLSPNKXYITIOHLPGJLCKTLAQSALNOIPHBTUYRRGHSEZNKMZUKAIIHATZTTIYLACTADTNINWCSUFBYNJKXAAJNAGFEVSCFUHOAJUQMISGBBSXQBYLMRASZACPLIUGLQYUZBNIZXXJXNNTSCKJZJZJMMYFMVXJAOPVEFHWHBYOAPKQEDYDDTRPBLPORURSKNPBTAMZKKZRRDDCMRAYGLNJUIKQYNJAUCAQEKHCWXDQPDOHYCVAEXJYULGVWTOVQGSFIVKVUNQDEKHNGXJYYCSPVZULHKYWGQJGAQCLPSXNSERDNRJXROZMXTJTVOSSYQPVOTKHMBQAXIQXUXZLZTKSOHUJRTAIMPDESFQJBJIFGYBEBNUIICFJTEQFVSYRWWJZISSAIMGCUSLEIACQXJIPDTILJQRBLDLIRSIEWJPLNAIDVVIXJQTQJDOZLDBBEEMVMVEQLHJZTCOUOSTCGROMEKRINQBGVGLJHVEAONQKRTJJTLGBKRNYOIXIRSLFSZFQIVGKAFLGKCTVBVKSIPWOMQXLYQXHLBCEUHBJBFNHOFCGPGWDSEFFYCTHMLPCQEJGSKWJKBKBBMIFNURNWYHEVSOQZMTVZGFIQAJFRGYUZXNRTXECTCNLYOISBGLPDBJBSLXLPOYMRCXMDTQHCNLVTQDWFTUZGBDXSYSCWBRGUOSTBELNVTAQDMKMIHMOXQTQLXVLSSSISVQVVZOTOYQRYUYQWOKNNQCQGGYSRQPKRCCVYHXSJMHOQOYOCWCRIPLARJOYIQRMMPMUEQBSBLJDDWRUMAUCZFZIODPUDHEEXALBWPIYPMDJLMWTGDRZHPXNEOFHQZJDMURGVMRWDOTUWYKNLRBVUVTNHIOUVQITGYFGFIEONBAAPYHWPCRMEHXCPKIJZFIAYFVOXKPASYIWXMRAHUWLAOOVREJHPBIIQMDPTEFNNGFZTQHHIFMTHLXKQBHISDXBGOTYSPNVUSLDLFCNOGNDBCJXQDUSSOEGPWPRFUSSJQHKHBHPHTJKYWSEBAAVJAUPVDBXFITSYOJEVYCPXWYXFKZDESBNOACIXWTRHQHFIMUKKDINHWYXNJKMOPBHOPLFMPLQJYFIAZKXXDMZBNDUOAXJDAEVIBEQACBDXWRGSFVPLKHFPNLPFLZNDTLUWRIGJJTTHZHPOWRYLZZYVNATBAWWXBYDUUSBDHBGGAWQVLRBMPGKNZVLKEEAVEKLVQUTZZDRQONOWWVWJFXXLTXMXKKPZKYFZSVYVKVNYCVPNPQBRIBPEMMAYFPNIWAZHBJEZMENVESSYPPASIFGSSFWVEUXASVKMPXZVZOOPTVOZCYQPXANFTSVGLUXXMWTERTADXMAMTXRDQNPLOAGMMGETHVBNEXECQIDNZPSZHLHPSOEMJFRDPFAWNFHYQUWIWNUQZTLHKLUBMJMQIMOYUMBUPRIGZZXVKJJOXHYUSUKLAIYMPOPZYVEWMVQMSOISXZUHSQAZGGGNMRUXDKVGPUCMTZOSJLRPDWAEKOXTRAWMHIJIZUQRLNKIEYLAIIYMTDFTXJUUCJIPOZZHGBIZWMNCRCABVMQWAFVMUXYYBVCIURGYAPTMPVLCNYUHAYTABVKSPWISDSDSPXYSOPDEMQDGQAXUOOOMPKYSOKVZZHDPMVNURNAULFUTCUKWGTXNQXMUKBXNLIDVYSEWBWMSNSRFPXXFTMJUEDKSDMNBKLSRNJPWVPQWMXXTFFGTBDBJIFNRVWZTBDJRBAZXOTGFQVYQPGRDOJJGJVQIWLDVJINOEEBSCJCISYVUTVHVMIYCOYSZFEXXAFMKAXSXWKTFCFAILJABWUNYLERKSNHSAQNHOVLTHJVSUMBZQSJHRLLOVOYUBXMXBYUNVAADRVBEJOORBYHWUNRHNIXRHWODLXNGPQURFPIQDFTESWNRNYFNRLLTCTMJVSJXPFQSGPZEQQTREWWSCEICEANFVODTIOKDWTZOQOBOIIOXGOMODFASZWZGUZZYQITDDCINEMYPCBFELHMHYPBTBWMCHQHYGFTVAOFPXWMPMFBCFNCLQEXJGVZPQBXCQOSKJDXWHIMEUWXOPZAFASCSXAWAROBLPMAMKLRWLZNPLGSPUZVNUBPUDIBPTDSLAAGXAAACQRSFVHCLAEDSMLKJAQSOQGFPOVIGXFVHLTPWPTOJSARDOZOGRLTULBERIYWIREEBJDDKDHPYLEYPYLEVVGLKCKUBMYGXZQMEEYEHJEHKNBKPRSVDGJOIZZGJSZEBTAQQGZWYFGDCBKDGXZURJPOAHRHDPQEXZSRPGVDUTABOGKWKUEHFZWHVAMSNTZUVCRQZPLXHYKIAOAPJZKZNMLSNEZSSKDLOSIYFAWAZNBUWENOVCSFKFUHNTGLVESXSRRNZKBHZKHZMVKJEVSRBDICLCKMSGPGNGYCKZVGYSVWCGWAYJOKQACTFXTIVFBDWPRUFIVTGGZHBPVLXFKISDNEOGDSEENJLEWROBJHPPPJCZYXEAIQANAZTKSNPFWYHDJVIPGWZZNMNNXWRAIIEICSCDHRYZVRHTOPRRATXUFCITHOKIOGUDGGZPVJCTBAHNZDWTOKIATSRIQZWEDRRFZBRKGVYNBBFOMOIAWWMMJIQVHDLNSVWNWBKTEHYKEVHACVDFLMNKRLJMIJVFXDVDYDMVKJSBPMCGMNFTSEUMHBDIOHZCJVPAYXQWDPYCHQCTUDLKEDTBJDUQBZWXVOXJLAJSTAOQNRRRPXCNDMWHLWDYGNNORDXMUJNZLKEAMDXANOKVBVPLRWXZIJPJKULODEULUEPKSLYIUZYWPYYFOCICAZYEWQYULJLFMTHLIEOLXUYPKQPEMFJJPSWULKNGYTFFIXVOIYUUSYBDMYGPUGZHUERHLFELEMNNAVEFSUQIKNYEDQTXYEKPWPDPCUUIMOSYTASPBMINXPVBCBQOLOSVBRPPGPYVIXLSXHQDRPHMJPIHERRWHDWOSAPJFTERGJSZLZWCIHWCUEGFCPSAQJNNFFMVVEUPTMNEFBHOHJBCAOCDWJYAYLNVZECIUCLQUQEDNWKYFYMGRFMZXQPEJCIXXPPQGVUAWUTGRMEZJKTEOFJBNRVZZKVJTACFXJJOKISAVSGRSLRYXFQGRMDSQWPTAJBQZVETHULJBDATXGHFZQRW';

test('verify correctness', () => {
    expect(morganAndString('DAD', 'DAD')).toBe('DADADD');
    expect(morganAndString('ABCBA', 'BCBA')).toBe('ABBCBACBA');
    expect(morganAndString('BAC', 'BAB')).toBe('BABABC');
    expect(morganAndString('DAD', 'DABC')).toBe('DABCDAD');
    expect(morganAndString('YZYYZYZYY', 'ZYYZYZYY')).toBe('YZYYZYYZYZYYZYZYY');
    expect(morganAndString('ZZYYZZZA', 'ZZYYZZZB')).toBe('ZZYYZZYYZZZAZZZB');
});

test( 'verify correctness with huge input', () => {
    expect(morganAndString(huge_a, huge_b)).toBe(huge_result);
})