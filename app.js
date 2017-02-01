$(document).ready(function() {
    function emptyThings() {
        $("#signContent").empty()
        $("#beerContent").empty()
        $("#randomBeerType").empty()
    }
    // beer style types start
    var beerStyles = ["Amber Ale", "IPA", "Lager", "Pilsner", "Brown Ale", "Saison", "Porter", "Stout", "Sour", "Belgian IPA", "Scotch Ale", "US Wheat", "Light Beers"]
    // beer style types end

    // beer list per style start
    var amberBeers = ["Prohibition Ale / Speakeasy Ales & Lagers / American Amber / Red Ale / 6.10% ABV", "African Amber / Mac and Jacks Brewery / American Amber / Red Ale / 5.20% ABV", "Alaskan Imperial Red Ale (Pilot Series) / Alaskan Brewing Co. / American Amber / Red Ale / 8.50% ABV",
        "Queen Bee / Shorts Brewing Company / American Amber / Red Ale / 8.00% ABV", "Bulkhead Red / Barrier Brewing Company / American Amber / Red Ale / 6.50% ABV", "Happy Amber / MadTree Brewing / American Amber / Red Ale / 6.00% ABV", "Five AM / BrewDog / American Amber / Red Ale / 5.00% ABV",
        "India Red Ale / Deschutes Brewery / American Amber / Red Ale / 6.40% ABV", "Zoe Maine Beer Company / American Amber / Red Ale / 7.20% ABV", "Lagunitas Lucky 13 Mondo Large Red Ale / Lagunitas Brewing Company / American Amber / Red Ale / 8.80% ABV", "Red Felt Ale / Goose Island Beer Co. / American Amber / Red Ale / 6.00% ABV", "Runoff Red IPA / Odell Brewing Company / American Amber / Red Ale / 6.50% ABV",
        "Roundhouse IRA / Bell's Brewery, Inc. / American Amber / Red Ale / 7.50% ABV", "Great Lakes Independence Ale / Great Lakes Brewing Co. / American Amber / Red Ale / 6.00% ABV", "Flipside Red IPA / Sierra Nevada Brewing Co. / American Amber / Red Ale / 6.20% ABV", "West Sixth Amber / West Sixth Brewing / Amber Ale / 5.5% ABV"
    ]
    var ipaBeers = ["G Knight Imperial Red Ale / Oskar Blues Grill & Brew / American Double / Imperial IPA / 8.70% ABV", "Julius / Tree House Brewing Company / American IPA / 6.80% ABV", "Fuzzy Baby Ducks IPA / New England Brewing Co. / American IPA / 6.20% ABV",
        "Congress Street IPA / Trillium Brewing Company / American IPA / 7.20% ABV", "Orange Starfish / Aslin Beer Company / American IPA / 5.70% ABV", "Odell IPA / Odell Brewing Company / American IPA / 7.00% ABV", "Pernicious IPA /Wicked Weed Brewing / American IPA / 7.30% ABV",
        "Jade / Foothills Brewing Company / Downtown Brewpub / American IPA / 7.40% ABV", "Hoppy Birthday / Alpine Beer Company / American IPA / 5.25% ABV", "Wet / Surly Brewing Company / American IPA / 7.50% ABV", "Alien Church / Tired Hands Brewing Company / American IPA / 7.00% ABV",
        "A Small Town In Ontario / Aslin Beer Company / American IPA / 6.00% ABV", "Maharaja /	Avery Brewing Company	/ American Double / Imperial IPA / 10.20% ABV", "Hopslam Ale	/ Bells Brewery, Inc. / American Double / Imperial IPA / 10.00% ABV", "GUBNA Imperial IPA / Oskar Blues Grill & Brew	/ American Double / Imperial IPA / 10.00% ABV"
    ]
    var lagerBeers = ["Shorts Beard Of Zeus India Style Pale Lager / Shorts Brewing Company / American Pale Lager / 4.50% ABV", "Craft Lager / Upslope Brewing Company - Lee Hill / American Pale Lager / 4.80% ABV", "Bells Lager Of The Lakes / Bells Brewery, Inc. / American Pale Lager / 5.00% ABV", "Remain In Light / Cambridge Brewing Company / American Pale Lager / 5.00% ABV",
        "Metropolis Lager / Speakeasy Ales & Lagers / American Pale Lager / 5.30% ABV", "Shift Pale Lager / New Belgium Brewing / American Pale Lager / 5.00% ABV", "Sibling Rye-valry / Jacks Abby Brewing / American Pale Lager / 6.00% ABV", "KC Pils / Boulevard Brewing Co. / American Pale Lager / 4.80% ABV", "Hoponius Union / Jacks Abby Brewing / American Pale Lager / 6.70% ABV",
        "Excess IPL / Jacs Abby Brewing / American Pale Lager / 7.20% ABV", "Bells Quinannan Falls Special Lager Beer / Bells Brewery, Inc. / American Pale Lager / 6.30% ABV", "Otter Creek Citra Mantra / Otter Creek Brewing / American Pale Lager / 5.75% ABV", "Jabby Brau / Jacks Abby Brewing / American Pale Lager / 4.50% ABV", "Contemporary Works - Mono / Stillwater Artisanal Ales /American Pale Lager / 5.20% ABV",
        "The One They Call Zoe / Hops and Grain Brewery / American Pale Lager / 5.20% ABV", "Von Trapp India Pale Lager / von Trapp Brewing / American Pale Lager / 5.50% ABV", "Samuel Adams Double Agent IPL / Boston Beer Company (Samuel Adams) / American Pale Lager / 5.00% ABV", "Natural Liberty / Black Acre Brewing Co. / American Pale Lager / 5.40% ABV"
    ]
    var pilsnerBeers = ["Coney Island Mermaid Pilsner / Coney Island Brewing Company / German Pilsener / 5.20% ABV", "Elm City Lager / New England Brewing Co. / German Pilsener / 5.00% ABV", "Mary / Hill Farmstead Brewery / German Pilsener / 5.60% ABV", "Prima Pils / Victory Brewing Company - Downingtown / German Pilsener / 5.30% ABV",
        "Rothaus Pils Tannen Zäpfle / Badische Staatsbrauerei Rothaus AG / German Pilsener / 5.10% ABV", "Braumeister Harvest Pils / Victory Brewing Company - Downingtown / German Pilsener / 6.10% ABV",
        "Braumeister Pils / Victory Brewing Company - Downingtown / German Pilsener / 5.50% ABV", "Pivo Pils / Firestone Walker Brewing Co. / German Pilsener / 5.30% ABV", "The Crisp / Sixpoint Brewery / German Pilsener / 5.40% ABV", "Bibo / Creature Comforts / German Pilsener / 5.20% ABV",
        "Weihenstephaner Pilsner / Bayerische Staatsbrauerei Weihenstephan / German Pilsener / 5.10% ABV", "Who You Callin Wussie / Arrogant Brewing / German Pilsener / 5.80% ABV", "Stoudts Pils / Stoudts Brewing Co. / German Pilsener / 5.40% ABV", "Neumarkter Lammsbräu (Organic) Pilsner / Neumarkter Lammsbräu / German Pilsener / 4.80% ABV"
    ]
    var brownAleBeers = ["Oak Cliff Coffee Ale, Coffee Ale / Deep Ellum Brewing Company / American Brown Ale / 7.50% ABV", "Snow Wizard Oak Aged Brown Ale / Saugatuck Brewing Company / American Brown Ale / 7.00% ABV", "Left Field Eephus Oatmeal Brown Ale / Left Field Brewery / American Brown Ale / 5.50% ABV",
        "Alaskan Heritage Coffee Brown Ale / Alaskan Brewing Co. / American Brown Ale / 7.00% ABV", "Davy Brown Ale / Figueroa Mountain Brewing Co. / American Brown Ale / 6.00% ABV",
        "Brunch. Dinner. Grub. / Carton Brewing Company / American Brown Ale / 6.00% ABV", "Boone County Brown / Bur Oak Brewing Company / American Brown Ale / 5.40% ABV", "Coconut Brown / Blackrocks Brewery / American Brown Ale / 6.80% ABV",
        "Cooter Brown / Jekyll Brewing / American Brown Ale / 6.00% ABV", "Founders Sumatra Mountain Brown / Founders Brewing Company / American Brown Ale / 9.00% ABV", "Coffee Okie / Prairie Artisan Ales / American Brown Ale / 13.00% ABV",
        "French Toast / Funky Buddha Brewery / American Brown Ale / 8.80% ABV", "Cacao Bender / Surly Brewing Company / American Brown Ale / 5.10% ABV",
        "Palo Santo Marron / Dogfish Head Craft Brewery / American Brown Ale / 12.00% ABV", "Coffee Bender / Surly Brewing Company / American Brown Ale / 5.10% ABV", "Board Meeting / Port Brewing / American Brown Ale / 8.50% ABV",
        "Bender / Surly Brewing Company / American Brown Ale / 5.10% ABV", "No Crusts / Funky Buddha Brewery / American Brown Ale / 6.00% ABV", "Indian Brown Ale / Dogfish Head Craft Brewery / American Brown Ale / 7.20% ABV",
        "George / Hill Farmstead Brewery / American Brown Ale / 6.00% ABV", "Noble Sorrel /Jackie Os Pub & Brewery /American Brown Ale / 11.00% ABV"
    ]
    var saisonBeers = ["Fruit Stand - Montmorency Cherry / Casey Brewing & Blending / Saison / Farmhouse Ale / 5.50% ABV", "Florence Wheat Saison / Hill Farmstead Brewery / Saison / Farmhouse Ale / 5.00% ABV", "Brett Loves Citra / Casey Brewing & Blending / Saison / Farmhouse Ale / 6.00% ABV", "Saison Deluxe / Southampton Publick House / Saison / Farmhouse Ale / 7.40% ABV",
        "Sofie Paradisi / Goose Island Beer Co. / Saison / Farmhouse Ale / 6.70% ABV", "Saison / Casey Brewing & Blending / Saison / Farmhouse Ale / 5.50% ABV", "Anián / de Garde Brewing / Saison / Farmhouse Ale / 8.00% ABV",
        "Ann / Hill Farmstead Brewery / Saison / Farmhouse Ale / 6.50% ABV", "Nectarine Premiere / de Garde Brewing / Saison / Farmhouse Ale / 7.10% ABV", "Juicy / Hill Farmstead Brewery / Saison / Farmhouse Ale / 7.40% ABV",
        "Saison Bernice / Sante Adairius Rustic Ales / Saison / Farmhouse Ale / 6.50% ABV", "Saison Du Fermier / Side Project Brewing / Saison / Farmhouse Ale / 7.00% ABV",
        "Clover / Hill Farmstead Brewery / Saison / Farmhouse Ale / 4.4% ABV", "Peche n Brett / Logsdon Farmhouse Ales / Saison / Farmhouse Ale / 10.00% ABV", "Sante Adairius / Triple Rock Cellarman Barrel Aged Saison / Sante Adairius Rustic Ales / Saison / Farmhouse Ale / 6.50% ABV", "Abricot Du Fermier / Side Project Brewing / Saison / Farmhouse Ale / 8.00% ABV",
        "Grassroots Brother Soigné / Grassroots Brewing / Saison / Farmhouse Ale / 5.00% ABV", "Saison Du Blé / Side Project Brewing / Saison / Farmhouse Ale / 6.00% ABV", "Arthur / Hill Farmstead Brewery / Saison / Farmhouse Ale / 6.00% ABV"
    ]
    var porterBeers = ["Shake - Chocolate Porter / Boulder Beer Company / American Porter / 5.9% ABV", "Cocoa Porter / West Sixth Brewing / American Porter / 7% ABV", "Last Buffalo In The Park / Funky Buddha Brewery / American Porter / 11.50% ABV",
        "Sunday Brunch / Kane Brewing Company / American Porter / 9.20% ABV", "Victory At Sea Coffee Vanilla Imperial Porter / Ballast Point Brewing Company / American Porter / 10.00% ABV",
        "Founders Porter / Founders Brewing Company / American Porter / 6.50% ABV", "As You Wish... / Pipeworks Brewing Company / American Porter / 11.00% ABV", "Pot & Kettle Oatmeal Porter W/ Cold Brewed Coffee / Trillium Brewing Company / American Porter / 7.50% ABV",
        "Imperial Coffee And Cigarettes / Cellarmaker Brewing Co. / American Porter / 10.40% ABV", "Black Butte Porter / Deschutes Brewery / American Porter / 5.20% ABV", "Koko Buni / Creature Comforts / American Porter / 6.80% ABV",
        "Odell Cutthroat Porter / Odell Brewing Company / American Porter / 5.10% ABV", "Smoke Jumper Smoked Imperial Porter / Left Hand Brewing Company / American Porter / 8.80% ABV", "Pretty Please With A Cherry On Top / Evil Twin Brewing / American Porter / 11.50% ABV",
        "TREAT (Imperial Chocolate Pumpkin Porter) / Midnight Sun Brewing Co. / American Porter / 7.80% ABV", "Dirty Old Man Imperial Rye Porter / Tyranena Brewing Company / American Porter / 7.90% ABV",
        "Gorilla Warfare Coffee Porter / Sixpoint Brewery / American Porter / 7.80% ABV", "Peanut Butter Porter / Dangerous Man Brewing / American Porter / 5.30% ABV", "Anchor Porter / Anchor Brewing Company / American Porter / 5.60% ABV", "Coffee Eugene / Revolution Brewing / American Porter / 7.00% ABV"
    ]
    var stoutBeers = ["Fade To Black / Left Hand Brewing Company / Foreign / Export Stout / 8.50% ABV", "Tweak / Avery Brewing Company / American Double / Imperial Stout / 17.50% ABV", "Ten FIDY Bourbon Barrel Aged / Oskar Blues Grill & Brew / Russian Imperial Stout / 12.90% ABV",
        "Bells Special Double Cream Stout / Bells Brewery, Inc. / American Stout / 6.10% ABV", "Bean Me Up Coffee Stout / Fat Heads Brewery & Saloon / American Stout / 6.50% ABV",
        "Bells Java Stout / Bells Brewery, Inc. / American Stout / 7.50% ABV", "Pisgah Nitro Stout / Pisgah Brewing Co. / American Stout / 6% ABV", "Double Shot / Tree House Brewing Company / American Stout / 7.60% ABV",
        "Double Shot- Batch 500 / Tree House Brewing Company / American Stout / 8.60% ABV", "Obsidian Stout / Deschutes Brewery / American Stout / 6.40% ABV", "Chocolate Stout / Rogue Ales / American Stout / 5.80% ABV",
        "Aphrodisiaque / Brasserie Dieu du Ciel! / American Stout / 6.50% ABV", "Double Shot - Columbia El Novado / Tree House Brewing Company / American Stout / 7.60% ABV", "Java The Stout / Jackie Os Pub & Brewery / American Stout / 6.50% ABV", "Pisgah Valdez / Pisgah Brewing Co. / American Stout / 6.20% ABV", "The Awakening Coffee Stout / Angry Chair Brewing / American Stout / 6.60% ABV",
        "The Patsy / Barley Forge Brewing Co. / American Stout / 6.60% ABV", "Rise Up Stout / Evolution Craft Brewing Company / American Stout / 6.80% ABV"
    ]
    var sourBeers = ["Raspberry Sour / Avery Brewing Company / American Wild Ale / 6.50% ABV", "Fuzzy / Side Project Brewing / American Wild Ale / 8.00% ABV", "Atrial Rubicite / Jester King Brewery / American Wild Ale / 5.80% ABV", "Supplication / Russian River Brewing Company / American Wild Ale / 7.00% ABV",
        "Westly / Sante Adairius Rustic Ales / American Wild Ale / 8.50% ABV", "Cable Car / The Lost Abbey / American Wild Ale / 7.00% ABV",
        "Beatification / Russian River Brewing Company / American Wild Ale / 5.50% ABV", "Montmorency Vs Balaton / Jester King Brewery / American Wild Ale / 6.70% ABV", "The Peach / de Garde Brewing / American Wild Ale / 7.30% ABV", "West Ashley / Sante Adairius Rustic Ales / American Wild Ale / 7.30% ABV",
        "The Cut: Sour Balaton Cherry / Casey Brewing & Blending / American Wild Ale / 5.00% ABV", "Allagash Farm To Face / Allagash Brewing Company / American Wild Ale / 5.70% ABV", "Pawpaw / Upland Brewing Company / American Wild Ale / 5-6% ABV", "Raspberry Wild One / Bells Brewery, Inc. / American Wild Ale / 6.50% ABV"
    ]
    var belgianIpaBeers = ["HopAnomaly - Reserve Series Aged In French Oak Chardonnay Barrels / Nebraska Brewing Company / Belgian IPA / 10.60% ABV", "Houblon Chouffe Dobbelen IPA Tripel / Brasserie d Achouffe / Belgian IPA / 9.00% ABV", "Burly Belgo India Pale Ale / North Peak Brewing Company / Belgian IPA / 6.50% ABV", "Dominus Vobiscum Lupulus / Microbrasserie Charlevoix / Belgian IPA / 10.00% ABV",
        "A Little Sumpin Wild / Lagunitas Brewing Company / Belgian IPA / 8.80% ABV", "The Audacity Of Hops / Cambridge Brewing Company / Belgian IPA / 8.00% ABV", "Gouden Carolus Hopsinjoor / Brouwerij Het Anker / Belgian IPA / 8.00% ABV", "Galaxy White IPA / Anchorage Brewing Company / Belgian IPA / 7.00% ABV",
        "Bitter Monk / Anchorage Brewing Company / Belgian IPA / 9.00% ABV", "Live A Rich Life / 3 Floyds Brewing Co. / Belgian IPA / 9.50% ABV", "De Ranke XX Bitter / Brouwerij De Ranke / Belgian IPA / 6.20% ABV", "Glaucus / Pipeworks Brewing Company / Belgian IPA / 6.20% ABV", "Bedlam / Ale Asylum / Belgian IPA / 7.40% ABV",
        "Hoperation Tripel Cross Belgian IPA / Phillips Brewing Company / Belgian IPA / 8.00% ABV", "Hoppenberg Uncertainty Principle / River North Brewery / Belgian IPA / 9.00% ABV", "Angry Birds Belgian Rye IPA / Haymarket Pub & Brewery / Belgian IPA / 7.50% ABV",
        "Piraat Triple Hop / Brouwerij Van Steenberge N.V. / Belgian IPA / 10.50% ABV", "White Shadow / Wild Rose Brewery & Taproom/ Belgian IPA / 6.50% ABV", "Party Boy / Tahoe Mountain Brewing Co. / Belgian IPA / 6.80% ABV", "t Smisje IPA+ / Brouwerij Smisje / Belgian IPA / 10.00% ABV", "Neverwhere / Modern Times Beer / Belgian IPA / 7.00% ABV"
    ]
    var scotchBeers = ["Brewers Reserve Bourbon Barrel Scotch Ale / Central Waters Brewing Co. / Scotch Ale / Wee Heavy / 9.50% ABV", "Big Sound Scotch Ale - Bourbon Barrel Aged / Cigar City Brewing / Scotch Ale / Wee Heavy / 8.50% ABV", "AleSmith Wee Heavy - Barrel Aged / AleSmith Brewing Company / Scotch Ale / Wee Heavy / 9.50% ABV",
        "Founders Backwoods Bastard / Founders Brewing Company / Scotch Ale / Wee Heavy / 11.20% ABV", "Bannatynes Scotch Ale / Cambridge Brewing Company / Scotch Ale / Wee Heavy / 9.20% ABV", "Traquair House Ale / Traquair House Brewery Lld / Scotch Ale / Wee Heavy / 7.20% ABV", "Traquair Jacobite / Traquair House Brewery Lld / Scotch Ale / Wee Heavy / 8.00% ABV",
        "AleSmith Wee Heavy / AleSmith Brewing Company / Scotch Ale / Wee Heavy / 10.00% ABV", "Big Sound Scotch Ale / Cigar City Brewing / Scotch Ale / Wee Heavy / 8.50% ABV", "Gravedigger Billy / Revolution Brewing / Scotch Ale / Wee Heavy / 10.40% ABV",
        "Wulver /Thirsty Dog Brewing Company / Scotch Ale / Wee Heavy / 12.00% ABV", "Splinters / Black Raven Brewing Co. / Scotch Ale / Wee Heavy / 10.80% ABV"
    ]
    var wheatBeers = ["Fortunate Islands - Grapefruit Zest / Modern Times Beer / American Pale Wheat Ale / 5.00% ABV", "A Little Sumpin Sumpin Ale / Lagunitas Brewing Company / American Pale Wheat Ale / 7.50% ABV", "Great Lakes Miami Weiss / Great Lakes Brewery / American Pale Wheat Ale / 4.50% ABV",
        "Thresher / Toppling Goliath Brewing Company / American Pale Wheat Ale / 5.25% ABV", "Acre Hoppy Wheat / Boulevard Brewing Co. / American Pale Wheat Ale / 5.50% ABV", "Jungle Boogie / Marz Community Brewing / American Pale Wheat Ale / 5.50% ABV",
        "Fortunate Islands / Modern Times Beer / American Pale Wheat Ale / 5.00% ABV", "Akari Shogun / Half Acre Beer Company / American Pale Wheat Ale / 5.50% ABV", "Orange Oak / Jackie Os Pub & Brewery / American Pale Wheat Ale / 9.00% ABV",
        "Gumballhead / 3 Floyds Brewing Co. / American Pale Wheat Ale / 5.60% ABV", "White Gold / Ithaca Beer Company / American Pale Wheat Ale / 8.00% ABV", "Pier / Trillium Brewing Company / American Pale Wheat Ale / 6.40% ABV", "Pulp / Civil Society Brewing / American Pale Wheat Ale / 6.30% ABV"
    ]
    var lightBeers = ["New Town 11° Light Lager / První Novoměstský restaurační pivovar / Light Lager / 4.00% ABV", "Sam Adams Light / Boston Beer Company (Samuel Adams) / Light Lager / 4.00% ABV",
        "Jamaican Style Lager / Zion Canyon Brewing Company / Light Lager / 4.00% ABV", "Horny Goat Horny Blonde / Horny Goat Brewing Co. / Light Lager / 5.00% ABV", "Narragansett Light / Narragansett Brewing Co. / Light Lager / 3.80% ABV", "Shorts Locals Light / Shorts Brewing Company / Light Lager / 3.60% ABV", "Shiner Light / Spoetzl Brewery / Shiner / Light Lager / 4.00% ABV",
        "Framingham Lager / Jacks Abby Brewing / Light Lager / 4.50% ABV", "Sankaty Light / Cisco Brewers Inc. / Light Lager / 3.80% ABV", "Yacht / Stillwater Artisanal Ales / Light Lager / 4.20% ABV", "4	Mahrs Leicht / Mahrs-Bräu / Light Lager / 2.80% ABV", "Light /Abita Brewing Co. / Light Lager / 4.00% ABV"
    ]
    // beer list per style end

    // all zodiac signs start
    var aries = ["Aries - March 21 to April 19"]
    var taurus = ["Taurus - April 20 - May 20"]
    var gemini = ["Gemini - May 21 - June 21"]
    var cancer = ["Cancer - June 21 - July 22"]
    var leo = ["Leo - July 23 - August 22"]
    var virgo = ["Virgo - August 23 - September 22"]
    var libra = ["Libra - September 23 - October 22"]
    var scorpio = ["Scorpio - October 23 - November 21"]
    var sagittarius = ["Sagittarius - November 22 - December 21"]
    var capricorn = ["Capricorn - December 22 - January 19"]
    var aquarius = ["Aquarius - January 20 - February 18"]
    var pisces = ["Pisces - February 19 - March 20"]
    // all zodiac signs end

    // random beer starts

    var randomBeer, randomIPA, randomLager, randomPilsner, randomBrownAle, randomSaison, randomStout, randomPorter, randomSour, randomBelgian, randomScotch, randomWheat, randomLight, randomAmber

    function randomBeerGen() {

        randomBeer = beerStyles[Math.floor(Math.random() * beerStyles.length)];
    }

    function generateRandomBeers() {
        randomAmber = amberBeers[Math.floor(Math.random() * amberBeers.length)];
        randomIPA = ipaBeers[Math.floor(Math.random() * ipaBeers.length)];
        randomLager = lagerBeers[Math.floor(Math.random() * lagerBeers.length)];
        randomPilsner = pilsnerBeers[Math.floor(Math.random() * pilsnerBeers.length)];
        randomBrownAle = brownAleBeers[Math.floor(Math.random() * brownAleBeers.length)];
        randomSaison = saisonBeers[Math.floor(Math.random() * saisonBeers.length)];
        randomPorter = porterBeers[Math.floor(Math.random() * porterBeers.length)];
        randomStout = stoutBeers[Math.floor(Math.random() * stoutBeers.length)];
        randomSour = sourBeers[Math.floor(Math.random() * sourBeers.length)];
        randomBelgian = belgianIpaBeers[Math.floor(Math.random() * belgianIpaBeers.length)];
        randomScotch = scotchBeers[Math.floor(Math.random() * scotchBeers.length)];
        randomWheat = wheatBeers[Math.floor(Math.random() * wheatBeers.length)];
        randomLight = lightBeers[Math.floor(Math.random() * lightBeers.length)];
    }

    // random beer end

    // date start
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var date = newdate = day + "/" + month + "/" + year + " ";
    // date end

    // aries beer function generator start
    $("#aries").click(function() {

        // emptying/displaying the content start
        emptyThings()
        randomBeerGen()
        randomBeerGen()
        generateRandomBeers()
        $("#beerContent").append(aries, "<br>", "Your beer sign for ", date, "<br>", "is a ", randomBeer)
        // emptying/displaying the content end

        // if statements start
        if (randomBeer === "Amber Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomAmber)
        }
        if (randomBeer === "IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomIPA)
        }
        if (randomBeer === "Lager") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLager)
        }
        if (randomBeer === "Pilsner") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPilsner)
        }
        if (randomBeer === "Brown Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBrownAle)
        }
        if (randomBeer === "Saison") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSaison)
        }
        if (randomBeer === "Porter") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPorter)
        }
        if (randomBeer === "Stout") {
            $("#randomBeerType").append(`Our suggestion is: `, randomStout)
        }
        if (randomBeer === "Sour") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSour)
        }
        if (randomBeer === "Belgian IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBelgian)
        }
        if (randomBeer === "Scotch Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomScotch)
        }
        if (randomBeer === "US Wheat") {
            $("#randomBeerType").append(`Our suggestion is: `, randomWheat)
        }
        if (randomBeer === "Light Beers") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLight)
        } else {}
        // if statement end
    })
    // aries beer function generator end

    // leo beer function generator start
    $("#leo").click(function() {

        // emptying/displaying the content start
        emptyThings()
        randomBeerGen()
        generateRandomBeers()

        $("#beerContent").append(leo, "<br>", "Your beer sign for ", date, "<br>", "is a ", randomBeer)
        // emptying/displaying the content end

        // if statements start
        if (randomBeer === "Amber Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomAmber)
        }
        if (randomBeer === "IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomIPA)
        }
        if (randomBeer === "Lager") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLager)
        }
        if (randomBeer === "Pilsner") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPilsner)
        }
        if (randomBeer === "Brown Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBrownAle)
        }
        if (randomBeer === "Saison") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSaison)
        }
        if (randomBeer === "Porter") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPorter)
        }
        if (randomBeer === "Stout") {
            $("#randomBeerType").append(`Our suggestion is: `, randomStout)
        }
        if (randomBeer === "Sour") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSour)
        }
        if (randomBeer === "Belgian IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBelgian)
        }
        if (randomBeer === "Scotch Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomScotch)
        }
        if (randomBeer === "US Wheat") {
            $("#randomBeerType").append(`Our suggestion is: `, randomWheat)
        }
        if (randomBeer === "Light Beers") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLight)
        } else {}
        // if statement end
    })
    // leo beer function generator end

    // gemini beer function generator start
    $("#gemini").click(function() {

        // emptying/displaying the content start
        emptyThings()
        randomBeerGen()
        generateRandomBeers()

        $("#beerContent").append(gemini, "<br>", "Your beer sign for ", date, "<br>", "is a ", randomBeer)
        // emptying/displaying the content end

        // if statements start
        if (randomBeer === "Amber Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomAmber)
        }
        if (randomBeer === "IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomIPA)
        }
        if (randomBeer === "Lager") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLager)
        }
        if (randomBeer === "Pilsner") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPilsner)
        }
        if (randomBeer === "Brown Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBrownAle)
        }
        if (randomBeer === "Saison") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSaison)
        }
        if (randomBeer === "Porter") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPorter)
        }
        if (randomBeer === "Stout") {
            $("#randomBeerType").append(`Our suggestion is: `, randomStout)
        }
        if (randomBeer === "Sour") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSour)
        }
        if (randomBeer === "Belgian IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBelgian)
        }
        if (randomBeer === "Scotch Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomScotch)
        }
        if (randomBeer === "US Wheat") {
            $("#randomBeerType").append(`Our suggestion is: `, randomWheat)
        }
        if (randomBeer === "Light Beers") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLight)
        } else {}
        // if statement end
    })
    // gemini beer function generator end

    // taurus beer function generator start

    $("#taurus").click(function() {
        emptyThings()
        randomBeerGen()
        generateRandomBeers()
        // emptying/displaying the content start

        $("#beerContent").append(taurus, "<br>", "Your beer sign for ", date, "<br>", "is a ", randomBeer)
        // emptying/displaying the content end

        // if statements start
        if (randomBeer === "Amber Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomAmber)
        }
        if (randomBeer === "IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomIPA)
        }
        if (randomBeer === "Lager") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLager)
        }
        if (randomBeer === "Pilsner") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPilsner)
        }
        if (randomBeer === "Brown Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBrownAle)
        }
        if (randomBeer === "Saison") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSaison)
        }
        if (randomBeer === "Porter") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPorter)
        }
        if (randomBeer === "Stout") {
            $("#randomBeerType").append(`Our suggestion is: `, randomStout)
        }
        if (randomBeer === "Sour") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSour)
        }
        if (randomBeer === "Belgian IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBelgian)
        }
        if (randomBeer === "Scotch Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomScotch)
        }
        if (randomBeer === "US Wheat") {
            $("#randomBeerType").append(`Our suggestion is: `, randomWheat)
        }
        if (randomBeer === "Light Beers") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLight)
        } else {}
        // if statement end
    })
    // taurus beer function generator end

    // cancer beer function generator start
    $("#cancer").click(function() {

        // emptying/displaying the content start
        emptyThings()
        randomBeerGen()
        generateRandomBeers()

        $("#beerContent").append(cancer, "<br>", "Your beer sign for ", date, "<br>", "is a ", randomBeer)
        // emptying/displaying the content end

        // if statements start
        if (randomBeer === "Amber Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomAmber)
        }
        if (randomBeer === "IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomIPA)
        }
        if (randomBeer === "Lager") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLager)
        }
        if (randomBeer === "Pilsner") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPilsner)
        }
        if (randomBeer === "Brown Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBrownAle)
        }
        if (randomBeer === "Saison") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSaison)
        }
        if (randomBeer === "Porter") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPorter)
        }
        if (randomBeer === "Stout") {
            $("#randomBeerType").append(`Our suggestion is: `, randomStout)
        }
        if (randomBeer === "Sour") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSour)
        }
        if (randomBeer === "Belgian IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBelgian)
        }
        if (randomBeer === "Scotch Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomScotch)
        }
        if (randomBeer === "US Wheat") {
            $("#randomBeerType").append(`Our suggestion is: `, randomWheat)
        }
        if (randomBeer === "Light Beers") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLight)
        } else {}
        // if statement end
    })
    // cancer beer function generator end

    // scorpio beer function generator start
    $("#scorpio").click(function() {

        // emptying/displaying the content start
        emptyThings()
        randomBeerGen()
        generateRandomBeers()

        $("#beerContent").append(scorpio, "<br>", "Your beer sign for ", date, "<br>", "is a ", randomBeer)
        // emptying/displaying the content end

        // if statements start
        if (randomBeer === "Amber Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomAmber)
        }
        if (randomBeer === "IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomIPA)
        }
        if (randomBeer === "Lager") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLager)
        }
        if (randomBeer === "Pilsner") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPilsner)
        }
        if (randomBeer === "Brown Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBrownAle)
        }
        if (randomBeer === "Saison") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSaison)
        }
        if (randomBeer === "Porter") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPorter)
        }
        if (randomBeer === "Stout") {
            $("#randomBeerType").append(`Our suggestion is: `, randomStout)
        }
        if (randomBeer === "Sour") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSour)
        }
        if (randomBeer === "Belgian IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBelgian)
        }
        if (randomBeer === "Scotch Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomScotch)
        }
        if (randomBeer === "US Wheat") {
            $("#randomBeerType").append(`Our suggestion is: `, randomWheat)
        }
        if (randomBeer === "Light Beers") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLight)
        } else {}
        // if statement end
    })
    // scorpio beer function generator end

    // sagittarius beer function generator start
    $("#sagittarius").click(function() {

        // emptying/displaying the content start
        emptyThings()
        randomBeerGen()
        generateRandomBeers()

        $("#beerContent").append(sagittarius, "<br>", "Your beer sign for ", date, "<br>", "is a ", randomBeer)
        // emptying/displaying the content end

        // if statements start
        if (randomBeer === "Amber Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomAmber)
        }
        if (randomBeer === "IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomIPA)
        }
        if (randomBeer === "Lager") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLager)
        }
        if (randomBeer === "Pilsner") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPilsner)
        }
        if (randomBeer === "Brown Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBrownAle)
        }
        if (randomBeer === "Saison") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSaison)
        }
        if (randomBeer === "Porter") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPorter)
        }
        if (randomBeer === "Stout") {
            $("#randomBeerType").append(`Our suggestion is: `, randomStout)
        }
        if (randomBeer === "Sour") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSour)
        }
        if (randomBeer === "Belgian IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBelgian)
        }
        if (randomBeer === "Scotch Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomScotch)
        }
        if (randomBeer === "US Wheat") {
            $("#randomBeerType").append(`Our suggestion is: `, randomWheat)
        }
        if (randomBeer === "Light Beers") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLight)
        } else {}
        // if statement end
    })
    // sagittarius beer function generator end

    // libra beer function generator start
    $("#libra").click(function() {

        // emptying/displaying the content start
        emptyThings()
        randomBeerGen()
        generateRandomBeers()

        $("#beerContent").append(libra, "<br>", "Your beer sign for ", date, "<br>", "is a ", randomBeer)
        // emptying/displaying the content end

        // if statements start
        if (randomBeer === "Amber Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomAmber)
        }
        if (randomBeer === "IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomIPA)
        }
        if (randomBeer === "Lager") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLager)
        }
        if (randomBeer === "Pilsner") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPilsner)
        }
        if (randomBeer === "Brown Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBrownAle)
        }
        if (randomBeer === "Saison") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSaison)
        }
        if (randomBeer === "Porter") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPorter)
        }
        if (randomBeer === "Stout") {
            $("#randomBeerType").append(`Our suggestion is: `, randomStout)
        }
        if (randomBeer === "Sour") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSour)
        }
        if (randomBeer === "Belgian IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBelgian)
        }
        if (randomBeer === "Scotch Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomScotch)
        }
        if (randomBeer === "US Wheat") {
            $("#randomBeerType").append(`Our suggestion is: `, randomWheat)
        }
        if (randomBeer === "Light Beers") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLight)
        } else {}
        // if statement end
    })
    // libra beer function generator end

    // capricorn beer function generator start
    $("#capricorn").click(function() {

        // emptying/displaying the content start
        emptyThings()
        randomBeerGen()
        generateRandomBeers()

        $("#beerContent").append(capricorn, "<br>", "Your beer sign for ", date, "<br>", "is a ", randomBeer)
        // emptying/displaying the content end

        // if statements start
        if (randomBeer === "Amber Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomAmber)
        }
        if (randomBeer === "IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomIPA)
        }
        if (randomBeer === "Lager") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLager)
        }
        if (randomBeer === "Pilsner") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPilsner)
        }
        if (randomBeer === "Brown Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBrownAle)
        }
        if (randomBeer === "Saison") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSaison)
        }
        if (randomBeer === "Porter") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPorter)
        }
        if (randomBeer === "Stout") {
            $("#randomBeerType").append(`Our suggestion is: `, randomStout)
        }
        if (randomBeer === "Sour") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSour)
        }
        if (randomBeer === "Belgian IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBelgian)
        }
        if (randomBeer === "Scotch Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomScotch)
        }
        if (randomBeer === "US Wheat") {
            $("#randomBeerType").append(`Our suggestion is: `, randomWheat)
        }
        if (randomBeer === "Light Beers") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLight)
        } else {}
        // if statement end
    })
    // capricorn beer function generator end

    // aquarius beer function generator start
    $("#aquarius").click(function() {

        // emptying/displaying the content start
        emptyThings()
        randomBeerGen()
        generateRandomBeers()

        $("#beerContent").append(aquarius, "<br>", "Your beer sign for ", date, "<br>", "is a ", randomBeer)
        // emptying/displaying the content end

        // if statements start
        if (randomBeer === "Amber Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomAmber)
        }
        if (randomBeer === "IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomIPA)
        }
        if (randomBeer === "Lager") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLager)
        }
        if (randomBeer === "Pilsner") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPilsner)
        }
        if (randomBeer === "Brown Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBrownAle)
        }
        if (randomBeer === "Saison") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSaison)
        }
        if (randomBeer === "Porter") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPorter)
        }
        if (randomBeer === "Stout") {
            $("#randomBeerType").append(`Our suggestion is: `, randomStout)
        }
        if (randomBeer === "Sour") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSour)
        }
        if (randomBeer === "Belgian IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBelgian)
        }
        if (randomBeer === "Scotch Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomScotch)
        }
        if (randomBeer === "US Wheat") {
            $("#randomBeerType").append(`Our suggestion is: `, randomWheat)
        }
        if (randomBeer === "Light Beers") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLight)
        } else {}
        // if statement end
    })
    // aquarius beer function generator end

    // pisces beer function generator start
    $("#pisces").click(function() {

        // emptying/displaying the content start
        emptyThings()
        randomBeerGen()
        generateRandomBeers()

        $("#beerContent").append(pisces, "<br>", "Your beer sign for ", date, "<br>", "is a ", randomBeer)
        // emptying/displaying the content end

        // if statements start
        if (randomBeer === "Amber Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomAmber)
        }
        if (randomBeer === "IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomIPA)
        }
        if (randomBeer === "Lager") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLager)
        }
        if (randomBeer === "Pilsner") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPilsner)
        }
        if (randomBeer === "Brown Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBrownAle)
        }
        if (randomBeer === "Saison") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSaison)
        }
        if (randomBeer === "Porter") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPorter)
        }
        if (randomBeer === "Stout") {
            $("#randomBeerType").append(`Our suggestion is: `, randomStout)
        }
        if (randomBeer === "Sour") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSour)
        }
        if (randomBeer === "Belgian IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBelgian)
        }
        if (randomBeer === "Scotch Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomScotch)
        }
        if (randomBeer === "US Wheat") {
            $("#randomBeerType").append(`Our suggestion is: `, randomWheat)
        }
        if (randomBeer === "Light Beers") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLight)
        } else {}
        // if statement end
    })
    // pisces beer function generator end

    // virgo beer function generator start
    $("#virgo").click(function() {

        // emptying/displaying the content start
        emptyThings()
        randomBeerGen()
        generateRandomBeers()

        $("#beerContent").append(virgo, "<br>", "Your beer sign for ", date, "<br>", "is a ", randomBeer).fadeIn("fast")
        // emptying/displaying the content end

        // if statements start
        if (randomBeer === "Amber Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomAmber).fadeIn("fast")
        }
        if (randomBeer === "IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomIPA).fadeIn("fast")
        }
        if (randomBeer === "Lager") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLager).fadeIn("fast")
        }
        if (randomBeer === "Pilsner") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPilsner).fadeIn("fast")
        }
        if (randomBeer === "Brown Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBrownAle).fadeIn("fast")
        }
        if (randomBeer === "Saison") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSaison).fadeIn("fast")
        }
        if (randomBeer === "Porter") {
            $("#randomBeerType").append(`Our suggestion is: `, randomPorter).fadeIn("fast")
        }
        if (randomBeer === "Stout") {
            $("#randomBeerType").append(`Our suggestion is: `, randomStout).fadeIn("fast")
        }
        if (randomBeer === "Sour") {
            $("#randomBeerType").append(`Our suggestion is: `, randomSour).fadeIn("fast")
        }
        if (randomBeer === "Belgian IPA") {
            $("#randomBeerType").append(`Our suggestion is: `, randomBelgian).fadeIn("fast")
        }
        if (randomBeer === "Scotch Ale") {
            $("#randomBeerType").append(`Our suggestion is: `, randomScotch).fadeIn("fast")
        }
        if (randomBeer === "US Wheat") {
            $("#randomBeerType").append(`Our suggestion is: `, randomWheat).fadeIn("fast")
        }
        if (randomBeer === "Light Beers") {
            $("#randomBeerType").append(`Our suggestion is: `, randomLight).fadeIn("fast")
        } else {}
        // if statement end
    })
    // virgo beer function generator end

})
