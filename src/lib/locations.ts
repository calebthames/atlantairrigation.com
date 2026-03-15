export interface CityData {
  name: string;
  slug: string;
  county: string;
  countySlug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  installationCopy: string;
  repairCopy: string;
  seasonalCopy: string;
  closingCopy: string;
  waterAuthority: string;
  soilContext: string;
  faqs: { q: string; a: string }[];
  nearbyLinks: { name: string; slug: string; countySlug: string }[];
}

export interface CountyData {
  name: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  cities: CityData[];
}

export const counties: CountyData[] = [
  // ─────────────────────────────────────────
  // FAYETTE COUNTY
  // ─────────────────────────────────────────
  {
    name: "Fayette County",
    slug: "fayette-county",
    metaTitle: "Irrigation Company Fayette County GA | Atlanta Irrigation",
    metaDescription:
      "Professional irrigation installation, sprinkler repair, and seasonal service throughout Fayette County, GA. Serving Peachtree City, Fayetteville, Tyrone, Senoia, and Brooks.",
    h1: "Irrigation Services in Fayette County, GA",
    intro:
      "Fayette County's combination of dense red clay subsoil, varying lot sizes, and strict HOA landscape standards makes irrigation here genuinely different from the rest of metro Atlanta. We work across the county's five main communities — from golf cart-friendly Peachtree City to the rural acreage properties in Brooks — and we understand that a zone layout that works in one neighborhood won't necessarily translate to the next. Atlanta Irrigation was built specifically to serve this corridor.",
    cities: [
      {
        name: "Peachtree City",
        slug: "peachtree-city",
        county: "Fayette County",
        countySlug: "fayette-county",
        metaTitle: "Irrigation Installation & Sprinkler Repair Peachtree City GA | Atlanta Irrigation",
        metaDescription:
          "Expert irrigation installation and sprinkler repair in Peachtree City, GA. We understand PTC's HOA requirements, red clay soil, and multi-zone golf cart community landscapes. Call today.",
        h1: "Irrigation Installation & Sprinkler Repair in Peachtree City, GA",
        intro:
          "Peachtree City is unlike any other community in Georgia, and that uniqueness extends underground. The city's 100-plus miles of golf cart paths divide properties in ways that affect irrigation zone planning that most contractors never anticipate. Add in the HOA landscape requirements in communities like Kedron Village, The Villages of Braelinn, and Smokerise, and you have a set of site-specific constraints that demand a contractor who actually knows the city.",
        installationCopy:
          "New irrigation installation in Peachtree City starts with understanding your HOA's approved plant palette and the water pressure dynamics in your specific village. Homes near Lake Kedron and Lake McIntosh often sit on lots with grade changes that require pressure-compensating heads to get even coverage. We design every system with those elevation shifts in mind, using zone layouts that account for turf areas, ornamental beds, and any hardscape boundaries your community requires. Whether you're in Wilksmoor or an established neighborhood off Peachtree Parkway, we'll design a system that keeps your landscape HOA-compliant and genuinely healthy.",
        repairCopy:
          "Sprinkler repairs in Peachtree City most commonly come down to two things: root intrusion from the city's mature tree canopy, and head damage from golf cart traffic near path-adjacent properties. We see a lot of crushed lateral lines and broken swing joints on properties that back up to cart paths. We also handle controller failures, zone valve replacements, and full diagnostic checks if your system has been running inconsistently. Most repairs can be completed in a single visit.",
        seasonalCopy:
          "Peachtree City's growing season typically runs March through October, but the real danger windows are the late-spring heat spikes and the occasional hard freeze in January or February. We offer spring activation visits that include a full head inspection, pressure test, and zone runtime calibration. Fall shutdown service winterizes your backflow preventer and drains your lateral lines before the first hard frost.",
        closingCopy:
          "Atlanta Irrigation serves all of Peachtree City, including Kedron, Braelinn, Wilksmoor, Glenloch, and the areas along Highway 54 and MacDuff Parkway.",
        waterAuthority: "City of Peachtree City Water",
        soilContext: "Red clay with significant grade changes near lake-adjacent properties",
        faqs: [
          { q: "Do you work with Peachtree City HOAs directly?", a: "Yes. We're familiar with the landscape and irrigation standards required by most PTC HOAs and can provide documentation for your approval process if needed." },
          { q: "Can you install irrigation near the golf cart paths?", a: "Absolutely — it requires careful planning around the path infrastructure, but we do it regularly. We use hand digging near path edges to avoid damaging the base and restore the turf properly after the install." },
          { q: "How many zones does a typical Peachtree City property need?", a: "Most mid-size lots in PTC run 4–7 zones depending on bed separation, turf area, and grade. Properties with significant elevation changes sometimes need more." },
          { q: "What's included in a spring activation visit?", a: "We turn the system on, run each zone, check every head for proper rotation and coverage, test the backflow preventer, verify controller programming, and adjust runtimes for the season." },
        ],
        nearbyLinks: [
          { name: "Fayetteville", slug: "fayetteville", countySlug: "fayette-county" },
          { name: "Tyrone", slug: "tyrone", countySlug: "fayette-county" },
          { name: "Sharpsburg", slug: "sharpsburg", countySlug: "coweta-county" },
        ],
      },
      {
        name: "Fayetteville",
        slug: "fayetteville",
        county: "Fayette County",
        countySlug: "fayette-county",
        metaTitle: "Irrigation Company Fayetteville GA | Installation & Sprinkler Repair",
        metaDescription:
          "Irrigation installation and sprinkler repair in Fayetteville, GA. We know Fayette County's red clay soil and the new development around Trilith. Locally owned, licensed and insured.",
        h1: "Irrigation Installation & Sprinkler Repair in Fayetteville, GA",
        intro:
          "Fayetteville is in an interesting moment — a long-established county seat with mature neighborhoods and decades-old landscaping, now sitting next to one of the most ambitious mixed-use developments in the Southeast in Trilith. That contrast defines what irrigation work looks like here. On the established side of town, we're often retrofitting older systems. On the new-development side, we're designing from scratch for newly sodded lots that need to establish quickly.",
        installationCopy:
          "New irrigation installs in Fayetteville have to contend with some of the densest red clay in Fayette County, particularly in older neighborhoods off Banks Road and around the Fayette Pavilion corridor. Clay soil holds water longer than sandy soils, which means overwatering is a real risk — systems need to be zoned thoughtfully and programmed conservatively. For newer construction near Trilith, we work with landscapers and builders to stage installation alongside sod so new lawns establish properly.",
        repairCopy:
          "In Fayetteville's older neighborhoods, the most common repair calls involve controller boards that have aged out, original poly pipe that has become brittle, and heads that have settled below grade. We do a lot of full-system assessments on properties that haven't had professional service in years. We're straightforward about what actually needs replacing versus what can be repaired.",
        seasonalCopy:
          "Fayetteville sits at enough elevation that it sees slightly harder winters than the Atlanta metro core, and the Fayette County Water System has had periodic drought-response restrictions in dry summers. We build seasonal awareness into every service visit — spring startups include current watering restriction checks, and fall shutdowns are timed to the actual forecast, not a calendar date.",
        closingCopy:
          "We serve all of Fayetteville, from the historic downtown area and Sandy Creek Road corridor to the new developments surrounding Trilith Studios. Our trucks are in Fayette County daily.",
        waterAuthority: "Fayette County Water System",
        soilContext: "Dense red clay in established neighborhoods; newer construction lots heavily compacted from grading",
        faqs: [
          { q: "Do you service systems in the Trilith community?", a: "Yes. We're familiar with the newer construction in and around Trilith and work with both homeowners and landscape contractors in that area." },
          { q: "My irrigation system is probably 15 years old — is it worth repairing or should I start over?", a: "It depends on the condition of the pipe and the controller. In many cases, older systems in Fayetteville have solid infrastructure that just needs head replacements and a controller upgrade. We'll give you an honest assessment." },
          { q: "Do you handle backflow preventer testing?", a: "Yes. We're licensed to test and certify backflow preventers, which Fayette County Water requires annually on irrigation systems." },
        ],
        nearbyLinks: [
          { name: "Peachtree City", slug: "peachtree-city", countySlug: "fayette-county" },
          { name: "Tyrone", slug: "tyrone", countySlug: "fayette-county" },
          { name: "Senoia", slug: "senoia", countySlug: "fayette-county" },
        ],
      },
      {
        name: "Tyrone",
        slug: "tyrone",
        county: "Fayette County",
        countySlug: "fayette-county",
        metaTitle: "Irrigation Installation Tyrone GA | Well & Municipal Systems",
        metaDescription:
          "Irrigation installation and repair in Tyrone, GA. We work with both well-fed and municipal irrigation systems on Tyrone's larger rural lots. Licensed, locally owned.",
        h1: "Irrigation Installation & Repair in Tyrone, GA",
        intro:
          "Tyrone occupies a middle ground in Fayette County — not as densely developed as Peachtree City or Fayetteville, but growing steadily as families seek larger lots within commuting distance of Atlanta. We encounter two very different property profiles here: newer subdivisions along Senoia Road with standard municipal connections, and older rural lots where a private well is the water source.",
        installationCopy:
          "On Tyrone's larger residential lots, irrigation system design has to account for square footage that simply doesn't exist in denser communities. For well-fed properties, we always start with a flow test to establish what the well can actually sustain before designing the system. Overloading a residential well with an undersized irrigation system is a common and expensive mistake. For municipal connections, we design to Fayette County Water's service pressure and size the backflow assembly accordingly.",
        repairCopy:
          "Tyrone repair calls tend to fall into two categories: well pump and pressure tank issues that affect irrigation performance, and physical damage from the kind of lawn equipment that larger properties require. Riding mowers and zero-turns cover ground fast, and head strikes are common. We carry common head replacements on the truck for most brands and can usually handle straightforward repairs same-day.",
        seasonalCopy:
          "Seasonal service in Tyrone is particularly important for well-fed properties. Running an irrigation system hard through a dry summer without monitoring your well level is a recipe for pump damage. Our spring startup service includes a conversation about your well's recovery rate and how to program your controller to run zones at intervals that give the well time to recover between cycles.",
        closingCopy:
          "We cover all of Tyrone, including the communities along Senoia Road, Dogwood Trail, and the rural corridors toward Brooks and Woolsey.",
        waterAuthority: "Fayette County Water System (municipal) or private well",
        soilContext: "Variable — red clay in subdivisions, more loamy soil on older rural properties",
        faqs: [
          { q: "Can you install irrigation on a well-fed property?", a: "Yes, and we do it regularly in Tyrone. We start with a well flow test to establish capacity, then design a zone schedule that works within what your well can sustain." },
          { q: "My lot is over an acre. How many zones will I need?", a: "Larger Tyrone lots typically need 8–12 zones for full coverage, sometimes more depending on your plant material and how much of the lot you want to irrigate." },
          { q: "Do you work on older poly pipe systems?", a: "Yes. A lot of Tyrone's older properties have poly mainline that's still serviceable. We assess condition before recommending replacement." },
        ],
        nearbyLinks: [
          { name: "Peachtree City", slug: "peachtree-city", countySlug: "fayette-county" },
          { name: "Brooks", slug: "brooks", countySlug: "fayette-county" },
          { name: "Sharpsburg", slug: "sharpsburg", countySlug: "coweta-county" },
        ],
      },
      {
        name: "Senoia",
        slug: "senoia",
        county: "Fayette County",
        countySlug: "fayette-county",
        metaTitle: "Irrigation Company Senoia GA | Sprinkler Installation & Repair",
        metaDescription:
          "Irrigation installation and sprinkler repair in Senoia, GA. Serving historic downtown properties and newer neighborhoods. Locally owned, Fayette County based.",
        h1: "Irrigation Installation & Sprinkler Repair in Senoia, GA",
        intro:
          "Senoia has a character that's hard to replicate — a genuinely historic small town that maintained its identity even as it became famous as the filming location for The Walking Dead. The landscape reflects that layered history: mature oaks and established ornamental plantings around historic homes on Main Street, alongside newer neighborhoods like Gin Property built within the last decade.",
        installationCopy:
          "Installing irrigation around Senoia's historic properties requires a level of care that production-minded contractors skip. Root systems from 80-year-old oaks are not something to trench through carelessly, and mature bed plantings often have specific moisture requirements that a standard turf-rate schedule will damage. We design around existing root zones, use drip emitters in ornamental areas where appropriate, and take the time to hand-dig near established trees and foundation plantings.",
        repairCopy:
          "Senoia's older properties often have irrigation systems that predate current controller technology by 20 years. Upgrading to a smart controller — one that adjusts run times based on local weather data — is one of the highest-ROI irrigation investments an older Senoia property can make. Beyond controller upgrades, we handle the full range of head repairs, broken laterals, and valve replacements.",
        seasonalCopy:
          "Senoia's position at the southern end of Fayette County means it can see slightly different weather patterns than northern parts of the county — late spring moisture tends to linger a bit longer, and summer dry periods hit hard. We offer seasonal calibration visits specifically designed to adjust your system's programming at the transition points of the year.",
        closingCopy:
          "We serve all of Senoia, from the historic district and the areas around downtown out to the newer subdivisions off Pylant Street and Seavy Street.",
        waterAuthority: "City of Senoia Water",
        soilContext: "Red clay, with significant mature root systems in historic areas requiring careful trenching",
        faqs: [
          { q: "Can you install drip irrigation for ornamental beds around a historic home?", a: "Yes, and for many of Senoia's older properties with established plantings, drip is the right tool. It delivers water exactly where needed without the overhead spray that can cause fungal issues." },
          { q: "What smart controller brands do you work with?", a: "We install and service Rachio, Hunter Hydrawise, and Rain Bird controllers. All three integrate with local weather data to automatically adjust run times." },
          { q: "Do you serve the neighborhoods east of downtown Senoia?", a: "Yes — we serve all of Senoia and the surrounding Fayette County unincorporated areas." },
        ],
        nearbyLinks: [
          { name: "Fayetteville", slug: "fayetteville", countySlug: "fayette-county" },
          { name: "Brooks", slug: "brooks", countySlug: "fayette-county" },
          { name: "Newnan", slug: "newnan", countySlug: "coweta-county" },
        ],
      },
      {
        name: "Brooks",
        slug: "brooks",
        county: "Fayette County",
        countySlug: "fayette-county",
        metaTitle: "Irrigation Installation Brooks GA | Large Lot & Rural Property Specialists",
        metaDescription:
          "Irrigation installation and repair for Brooks, GA rural and large-acreage properties. Well systems, large-zone design, drip for pasture and garden applications. Call Atlanta Irrigation.",
        h1: "Irrigation Installation & Service in Brooks, GA",
        intro:
          "Brooks is the most rural community in Fayette County, and irrigation work here looks different than anywhere else in our service area. Properties commonly run from one acre to ten or more, well water is the norm, and the irrigation goals often go beyond turf — gardens, fruit trees, pasture grass, and ornamental acreage are common asks.",
        installationCopy:
          "Large-acreage irrigation in Brooks requires system design that residential contractors often aren't equipped for. Mainline sizing, pump selection, pressure management across long lateral runs, and cycle-and-soak programming for clay soil all matter significantly on a 3-acre irrigated property. We design Brooks systems with these realities built in from the start. For properties with both turf and garden or orchard areas, we design dedicated zones for each plant type.",
        repairCopy:
          "Rural properties in Brooks face repair challenges that suburban systems don't. Wildlife damage to above-grade pipe, well pump degradation affecting system pressure, and extended lateral runs that develop slow leaks are all common. We also see properties where a system was partially installed and abandoned — incomplete coverage or zones never connected. We're comfortable picking up where someone else left off.",
        seasonalCopy:
          "Well-fed systems in Brooks need seasonal attention that goes beyond a simple turn-on and turn-off. Spring startup should include a well recovery test if you've had a dry winter, and summer programming should incorporate cycle-and-soak scheduling to let clay soil absorb water between cycles. Fall shutdown on Brooks properties often involves draining longer pipe runs that would otherwise hold standing water through a freeze.",
        closingCopy:
          "Brooks is a community we genuinely enjoy working in. If you've got a larger property and have been told irrigation is too complicated or too expensive, get a second opinion from us first.",
        waterAuthority: "Private well (most properties)",
        soilContext: "Red clay and loam mix; larger lots with significant grade variation",
        faqs: [
          { q: "Can you design an irrigation system for a property with a garden and an orchard as well as turf?", a: "Yes. We design multi-use systems regularly on Brooks properties. Turf, ornamental beds, vegetable gardens, and fruit trees all have different water requirements and get separate zones." },
          { q: "My well pressure drops when the irrigation runs. What causes that?", a: "Usually it's one of three things: the pump is undersized, the pressure tank bladder has failed, or the system was designed with too many heads running simultaneously. We diagnose which before recommending a fix." },
          { q: "Do you work on properties outside the Brooks community boundaries?", a: "Yes. We serve the rural Fayette County unincorporated areas surrounding Brooks, including toward Woolsey and the Fayette/Coweta line." },
        ],
        nearbyLinks: [
          { name: "Tyrone", slug: "tyrone", countySlug: "fayette-county" },
          { name: "Senoia", slug: "senoia", countySlug: "fayette-county" },
          { name: "Turin", slug: "turin", countySlug: "coweta-county" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // COWETA COUNTY
  // ─────────────────────────────────────────
  {
    name: "Coweta County",
    slug: "coweta-county",
    metaTitle: "Irrigation Company Coweta County GA | Atlanta Irrigation",
    metaDescription:
      "Professional irrigation installation, sprinkler repair, and seasonal service throughout Coweta County, GA. Serving Newnan, Sharpsburg, Turin, Grantville, and Moreland.",
    h1: "Irrigation Services in Coweta County, GA",
    intro:
      "Coweta County is one of the fastest-growing counties in Georgia, and that growth has created a wide spectrum of irrigation needs — from established historic homes in downtown Newnan to brand-new construction in Sharpsburg subdivisions, to rural acreage properties in Grantville and Moreland. Atlanta Irrigation works across all of it.",
    cities: [
      {
        name: "Newnan",
        slug: "newnan",
        county: "Coweta County",
        countySlug: "coweta-county",
        metaTitle: "Irrigation Company Newnan GA | Installation & Sprinkler Repair",
        metaDescription:
          "Irrigation installation and sprinkler repair in Newnan, GA. Serving the historic district, new Coweta County subdivisions, and everything in between. Locally owned and licensed.",
        h1: "Irrigation Installation & Sprinkler Repair in Newnan, GA",
        intro:
          "Newnan's growth over the last decade has been extraordinary — consistently ranked among the fastest-growing cities in Georgia. But Newnan also has a historic core with mature properties along College Street and Jefferson Street that require a completely different irrigation approach than a freshly graded subdivision lot. We work in both Newnan contexts daily.",
        installationCopy:
          "New installation in Newnan's established neighborhoods means navigating mature root systems, established ornamental beds, and sometimes older infrastructure. In Newnan's newer developments — the subdivisions off Hwy 34, around Ashley Park, and in the growth areas east of downtown — we work with homeowners installing irrigation at move-in, often on lots where the sod was just laid. Timing matters here: getting a system in early enough to establish new sod properly is one of the most important decisions a new Newnan homeowner can make.",
        repairCopy:
          "Newnan repair calls run the full range. In the historic district, we see aging systems with original brass heads and deteriorated swing joints. In newer neighborhoods, we see fresh installs damaged by landscaping crews who weren't aware of head locations, or systems originally installed by a builder using minimum-spec components. We service all of it.",
        seasonalCopy:
          "Newnan summers are unforgiving. The City of Newnan Water and Coweta County Water Authority both implement watering restrictions during drought conditions. Our spring activation service includes programming your controller to the current restrictions in effect. Fall shutdown is important — backflow preventers left un-drained through a hard freeze can crack, and that's an expensive repair.",
        closingCopy:
          "We serve all of Newnan — the historic district, Summergrove, Ashley Park, Newnan Crossing, the Hwy 34 corridors, and the rural fringes.",
        waterAuthority: "City of Newnan Water / Coweta County Water Authority",
        soilContext: "Red clay with some sandy loam variation; newer construction lots heavily compacted from grading",
        faqs: [
          { q: "We just bought a new construction home in Newnan. Is now a good time to install irrigation?", a: "The best time is right around sod installation or immediately after — new sod needs consistent moisture to establish, and hand-watering reliably enough is nearly impossible." },
          { q: "Are there watering restrictions in Newnan I need to know about?", a: "Yes. Georgia has statewide outdoor watering restrictions, and the City of Newnan can implement additional restrictions during drought conditions. We stay current on these and program your controller accordingly." },
          { q: "Can you repair a system that was installed by a builder and never worked correctly?", a: "Absolutely, and it's one of the most common calls we get. Builder-installed systems are often under-spec'd for the lot. We'll assess what's there and give you an honest picture." },
        ],
        nearbyLinks: [
          { name: "Sharpsburg", slug: "sharpsburg", countySlug: "coweta-county" },
          { name: "Senoia", slug: "senoia", countySlug: "fayette-county" },
          { name: "Turin", slug: "turin", countySlug: "coweta-county" },
        ],
      },
      {
        name: "Sharpsburg",
        slug: "sharpsburg",
        county: "Coweta County",
        countySlug: "coweta-county",
        metaTitle: "Irrigation Installation Sharpsburg GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and sprinkler repair in Sharpsburg, GA. Serving newer Coweta County subdivisions and established properties near Peachtree City.",
        h1: "Irrigation Installation & Sprinkler Repair in Sharpsburg, GA",
        intro:
          "Sharpsburg sits at the intersection of two growth patterns — the northward expansion of Newnan's suburban development and the eastward overflow from Peachtree City. The result is a community with a mix of mid-2000s subdivisions, some newer construction, and older rural properties that predate all of it.",
        installationCopy:
          "Most new irrigation installs in Sharpsburg are on mid-size residential lots in established subdivisions — properties with a defined turf area, some ornamental beds, and typically a 3/4\" municipal water connection. A common mistake on Sharpsburg installs is cramming too many heads onto too few zones to save money on valves — it cuts the install cost by $200 and creates coverage problems that cost more than that to fix. We size systems properly from the start.",
        repairCopy:
          "Sharpsburg repair calls most often involve mid-age systems from the 2005–2015 build era that are starting to show wear. Solenoid valves in that age range fail frequently, controller transformers die, and swing joints on pop-up heads become brittle. These are all straightforward repairs when caught early.",
        seasonalCopy:
          "Sharpsburg's position on the Coweta/Fayette county line means it shares weather patterns with both counties — the spring startup window is typically mid-March to early April, and fall shutdown should happen before any hard freeze, usually late November.",
        closingCopy:
          "We serve all of Sharpsburg and the surrounding Coweta County unincorporated areas near the Fayette line.",
        waterAuthority: "Coweta County Water Authority",
        soilContext: "Red clay, typical of the Coweta/Fayette border corridor",
        faqs: [
          { q: "My subdivision was built in 2008 and most systems on the street seem to have issues. Is this common?", a: "Yes. Systems from that era often used components with a 12–15 year service life. It's not unusual for a whole neighborhood to start experiencing similar failures around the same time." },
          { q: "How long does a typical residential install take in Sharpsburg?", a: "Most standard residential installs are completed in one day. Larger properties or systems requiring more than 8 zones may extend to a second day." },
        ],
        nearbyLinks: [
          { name: "Newnan", slug: "newnan", countySlug: "coweta-county" },
          { name: "Peachtree City", slug: "peachtree-city", countySlug: "fayette-county" },
          { name: "Tyrone", slug: "tyrone", countySlug: "fayette-county" },
        ],
      },
      {
        name: "Turin",
        slug: "turin",
        county: "Coweta County",
        countySlug: "coweta-county",
        metaTitle: "Irrigation Installation Turin GA | Rural Property Specialists",
        metaDescription: "Irrigation installation and repair in Turin, GA. Specializing in larger rural Coweta County lots, well water systems, and acreage properties.",
        h1: "Irrigation Installation & Service in Turin, GA",
        intro:
          "Turin is a small community in western Coweta County where the landscape is primarily rural and properties run large. Most of what we do in Turin is on acreage — homeowners with several acres who want to irrigate a lawn around the house, a kitchen garden, or ornamental beds without dragging hoses or hoping for rain.",
        installationCopy:
          "Turin installs almost always start with a conversation about water source. Private well capacity varies enormously in this part of Coweta County, and designing a system without knowing what the well can sustain is irresponsible. We conduct a timed flow test before drawing up any system design, then engineer zones and cycle schedules around what the well actually produces.",
        repairCopy:
          "Rural properties in Turin face some repair challenges unique to their setting. Surface line damage from farm equipment or deer is common. Well pressure fluctuations cause heads to underperform in ways that are easy to misdiagnose as a head or zone issue when the real problem is upstream.",
        seasonalCopy:
          "Seasonal service in Turin is important, particularly for well-fed systems. Spring startup should verify your well's current recovery rate before you resume heavy irrigation demand. Fall shutdown on rural Coweta properties should address any exposed or minimally buried pipe that could freeze.",
        closingCopy:
          "If you're in Turin or the surrounding rural Coweta unincorporated area and have been putting off irrigation because it seemed complicated, call us.",
        waterAuthority: "Private well (most properties) / Coweta County Water Authority",
        soilContext: "Mixed clay and loam, larger lot variation",
        faqs: [
          { q: "Is irrigation practical on a 5-acre property?", a: "Very practical — but it requires designing for actual acreage, not just scaling up a suburban system. We can help you decide what to irrigate and what to leave to rainfall." },
          { q: "Can you install a drip system for a large vegetable garden?", a: "Yes. Drip is the best choice for vegetable gardens — it delivers water at root level, reduces foliar disease, and uses significantly less water than overhead spray." },
        ],
        nearbyLinks: [
          { name: "Newnan", slug: "newnan", countySlug: "coweta-county" },
          { name: "Brooks", slug: "brooks", countySlug: "fayette-county" },
          { name: "Moreland", slug: "moreland", countySlug: "coweta-county" },
        ],
      },
      {
        name: "Grantville",
        slug: "grantville",
        county: "Coweta County",
        countySlug: "coweta-county",
        metaTitle: "Irrigation Installation Grantville GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and sprinkler repair in Grantville, GA. Serving Coweta County's southern communities with honest, quality irrigation service.",
        h1: "Irrigation Installation & Sprinkler Repair in Grantville, GA",
        intro:
          "Grantville is one of those Coweta County communities where the pace is slower, the properties are larger, and the expectation for service is that someone actually shows up when they say they will. The irrigation work here is primarily on mid-to-large residential properties, some small farms, and the occasional commercial property along the I-85 corridor.",
        installationCopy:
          "New irrigation installations in Grantville typically serve one of two goals: protecting a lawn and ornamental landscape investment on a residential property, or providing consistent moisture to a working garden or small farm operation. Residential systems follow our standard design process — flow test, zone layout based on plant type and sun exposure, head selection, and controller programming. Agricultural or garden applications get drip and micro-spray systems matched to crop water requirements.",
        repairCopy:
          "Service calls in Grantville are sometimes the first professional irrigation visit a property has had in years. We don't make anyone feel bad about that — we assess what's there, explain what we find in plain language, and give clear options. A lot of Grantville systems just need targeted repairs and a proper reprogramming, not a replacement.",
        seasonalCopy:
          "Grantville's position in southern Coweta County means it's slightly more exposed to summer heat events coming up from the Alabama border. Systems here can get worked hard in July and August, and mid-season checks in late June are worth doing to verify that runtimes set in April are still meeting the landscape's actual needs.",
        closingCopy:
          "We make regular service runs to Grantville and the surrounding southern Coweta corridor. Don't assume we're too far — call and ask.",
        waterAuthority: "City of Grantville Water / private well",
        soilContext: "Sandy clay loam, some variation near creek drainages",
        faqs: [
          { q: "Do you serve properties outside the Grantville city limits?", a: "Yes — we serve unincorporated Coweta County including the rural areas south and west of Grantville." },
          { q: "What's the minimum lot size that makes irrigation worth installing?", a: "There's no hard minimum. Even a quarter-acre property can benefit from irrigation. We can give you a straight answer after a quick site visit." },
        ],
        nearbyLinks: [
          { name: "Newnan", slug: "newnan", countySlug: "coweta-county" },
          { name: "Moreland", slug: "moreland", countySlug: "coweta-county" },
          { name: "Turin", slug: "turin", countySlug: "coweta-county" },
        ],
      },
      {
        name: "Moreland",
        slug: "moreland",
        county: "Coweta County",
        countySlug: "coweta-county",
        metaTitle: "Irrigation Installation Moreland GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Moreland, GA. Honest service for Coweta County rural and residential properties. Locally owned, licensed, and insured.",
        h1: "Irrigation Installation & Service in Moreland, GA",
        intro:
          "Moreland is a quiet community in eastern Coweta County, best known historically as the birthplace of Erskine Caldwell, and known today as a rural residential area where people come specifically because it isn't a suburb. Properties here tend to be larger, neighbors are farther apart, and the general preference is for contractors who do quality work without overselling.",
        installationCopy:
          "Installing irrigation in Moreland means designing for properties where the layout isn't standardized and the water source varies. Some properties are on Coweta County Water, others on private wells, and a small number draw from surface sources. Each scenario requires a different design approach. For more complex rural properties, we take more time upfront to make sure the system will actually perform.",
        repairCopy:
          "Moreland repair calls often come from properties that have had an irrigation system for a long time but haven't had professional service in years. Controllers that have lost programming, heads that have sunk below grade, and valve boxes filled with roots are typical findings. We'll give you a thorough assessment and honest recommendations.",
        seasonalCopy:
          "Seasonal service in Moreland follows the same principles as the rest of our rural Coweta service area — spring activation includes water source verification and a complete zone check, and fall shutdown addresses any above-grade or shallowly buried pipe before the freeze season. We offer annual service agreements for Moreland customers who want scheduled visits without having to remember to call.",
        closingCopy:
          "Moreland and the surrounding eastern Coweta corridor are part of our regular service route.",
        waterAuthority: "Coweta County Water Authority / private well",
        soilContext: "Sandy clay loam with some rocky substrate near creek drainages",
        faqs: [
          { q: "Do you offer annual service agreements?", a: "Yes. Our annual agreement covers spring activation, fall shutdown, and a mid-season check visit. It's the most cost-effective way to keep a system running well over time." },
          { q: "Can you install a system that handles both a lawn and a large raised-bed garden?", a: "Yes. Lawn turf and raised beds have different water requirements and need separate zones — typically drip for the beds and rotary or spray heads for the turf." },
        ],
        nearbyLinks: [
          { name: "Newnan", slug: "newnan", countySlug: "coweta-county" },
          { name: "Turin", slug: "turin", countySlug: "coweta-county" },
          { name: "Senoia", slug: "senoia", countySlug: "fayette-county" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // HENRY COUNTY
  // ─────────────────────────────────────────
  {
    name: "Henry County",
    slug: "henry-county",
    metaTitle: "Irrigation Company Henry County GA | Atlanta Irrigation",
    metaDescription: "Irrigation installation, sprinkler repair, and seasonal service across Henry County, GA. Serving McDonough, Stockbridge, Hampton, and Locust Grove.",
    h1: "Irrigation Services in Henry County, GA",
    intro:
      "Henry County has been one of the fastest-growing counties in the entire country for over a decade, and that growth has created enormous demand for irrigation services on everything from starter homes in new Stockbridge subdivisions to larger executive properties in McDonough. Atlanta Irrigation brings the same care and precision to Henry County that we apply in our core Fayette and Coweta markets.",
    cities: [
      {
        name: "McDonough",
        slug: "mcdonough",
        county: "Henry County",
        countySlug: "henry-county",
        metaTitle: "Irrigation Company McDonough GA | Installation & Sprinkler Repair",
        metaDescription: "Irrigation installation and sprinkler repair in McDonough, GA. Henry County's fastest-growing city deserves a properly designed system. Call Atlanta Irrigation.",
        h1: "Irrigation Installation & Sprinkler Repair in McDonough, GA",
        intro:
          "McDonough is Henry County's seat and its commercial center, but it's the residential growth surrounding the historic square that defines most of our work here. The city has absorbed wave after wave of new development — from the subdivisions off Highway 81 and Eagles Landing Parkway to the more established neighborhoods closer to downtown. Each zone of growth has its own irrigation profile.",
        installationCopy:
          "New irrigation installations in McDonough's newer subdivisions are some of the most straightforward work we do — clean lots, municipal water connections, fresh sod that needs to establish. But we pay close attention to soil compaction on newly graded lots, which can be severe enough to prevent proper water infiltration even with a well-designed system. We address compaction in our zone programming by running shorter, more frequent cycles until the soil structure recovers. For established McDonough neighborhoods, installs require more care around existing landscaping and older utility lines.",
        repairCopy:
          "McDonough's rapid growth has brought a lot of builder-grade irrigation systems that were designed to a price point, not a performance standard. These systems frequently have undersized mainlines, too few zones, and controllers that were never properly programmed after install. We see them constantly and are efficient at retrofitting or repairing them. If your McDonough system has never worked quite right since you moved in, that's probably why.",
        seasonalCopy:
          "Henry County's summers are consistently hot and dry enough that an unmonitored irrigation system can leave a landscape looking rough by August. We offer spring startup visits that include a full zone check and runtime calibration based on your specific plant material, and fall shutdowns that protect backflow preventers before winter. Henry County Water Authority has had drought-response restrictions in recent dry years — we keep current on those and factor them into our programming.",
        closingCopy:
          "We serve all of McDonough, including Eagles Landing, the Hwy 81 corridor, Ola, and the surrounding unincorporated Henry County areas.",
        waterAuthority: "Henry County Water Authority",
        soilContext: "Red clay with heavy compaction on newer construction sites",
        faqs: [
          { q: "Do you work in the Eagles Landing area?", a: "Yes. Eagles Landing is one of our more active service areas in McDonough — we're familiar with the community's landscape standards and HOA context." },
          { q: "My builder-installed system has never covered the back yard evenly. Can that be fixed without a full replacement?", a: "Often yes. Uneven coverage is usually a zone design or head placement issue that can be corrected with targeted adjustments rather than a full redo." },
        ],
        nearbyLinks: [
          { name: "Stockbridge", slug: "stockbridge", countySlug: "henry-county" },
          { name: "Hampton", slug: "hampton", countySlug: "henry-county" },
          { name: "Locust Grove", slug: "locust-grove", countySlug: "henry-county" },
        ],
      },
      {
        name: "Stockbridge",
        slug: "stockbridge",
        county: "Henry County",
        countySlug: "henry-county",
        metaTitle: "Irrigation Installation Stockbridge GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and sprinkler repair in Stockbridge, GA. Serving Henry County residential communities with honest, professional service.",
        h1: "Irrigation Installation & Sprinkler Repair in Stockbridge, GA",
        intro:
          "Stockbridge is the northern gateway to Henry County and one of its most densely developed areas. Its proximity to I-75 made it an early target for residential development in the 1990s and 2000s, which means a large portion of Stockbridge's homes now sit on irrigation systems that are 15–25 years old. That age bracket is where we do a lot of our most impactful work.",
        installationCopy:
          "New installation in Stockbridge is most common in the areas experiencing infill development and in communities where homeowners are upgrading from hand-watering or builder-grade systems. We design every Stockbridge system around the property's actual sun exposure, plant material, and water pressure — not a template. The area's red clay soil requires conservative zone programming to prevent runoff, particularly on sloped properties near the South River corridor.",
        repairCopy:
          "For Stockbridge's aging system inventory, our most common repair scenarios are solenoid valve failures, cracked backflow preventers from freeze events, and poly pipe that has become brittle after two decades in the ground. We conduct a full diagnostic before recommending parts, because the symptom you see on the surface — a zone that won't run, a head that won't pop — is often the result of a different underlying issue.",
        seasonalCopy:
          "Spring startup in Stockbridge is particularly important for properties with older systems, because winter is when small problems become big ones — cracked fittings, damaged backflow preventers, controller boards that failed during a power surge. We catch these at startup rather than letting them run through summer and waste water while damaging your landscape.",
        closingCopy:
          "We serve all of Stockbridge and the surrounding Henry County communities along the I-75 corridor.",
        waterAuthority: "Henry County Water Authority",
        soilContext: "Red clay; significant slope variation in areas near the South River drainage",
        faqs: [
          { q: "My irrigation system is from the late 1990s. Should I replace it or repair it?", a: "At that age it depends heavily on the pipe condition. If the poly mainline is still intact and flexible, the system often has years of life left with targeted repairs. We'll tell you honestly after a look." },
          { q: "Do you handle emergency repair calls?", a: "Yes. If you have a broken head flooding your yard or a zone that won't shut off, call us and we'll get someone out as quickly as possible." },
        ],
        nearbyLinks: [
          { name: "McDonough", slug: "mcdonough", countySlug: "henry-county" },
          { name: "Morrow", slug: "morrow", countySlug: "clayton-county" },
          { name: "Hampton", slug: "hampton", countySlug: "henry-county" },
        ],
      },
      {
        name: "Hampton",
        slug: "hampton",
        county: "Henry County",
        countySlug: "henry-county",
        metaTitle: "Irrigation Installation Hampton GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Hampton, GA. Serving Henry County's southern communities and rural properties near Atlanta Motor Speedway.",
        h1: "Irrigation Installation & Service in Hampton, GA",
        intro:
          "Hampton sits in the southern portion of Henry County, where the density of McDonough gives way to larger lots, more rural character, and properties that often predate the county's rapid growth. It's also home to Atlanta Motor Speedway, which anchors the local economy and brings a level of commercial activity unusual for a community this size.",
        installationCopy:
          "Hampton residential installs tend to be on larger lots than you'd find in Stockbridge or the McDonough suburbs, and that changes the system design conversation. More square footage of turf means more zones, larger mainline, and greater attention to pressure drop across long lateral runs. We design Hampton systems to perform uniformly from the head closest to the valve box to the one at the far end of the property.",
        repairCopy:
          "Hampton repair calls often involve properties that haven't had irrigation service in years — sometimes because the previous owner installed the system themselves, sometimes because they used a company that's no longer in business. We're comfortable working on any brand and any configuration. Our diagnostic process is methodical: we test from the water source forward and don't assume the problem is where the symptom appears.",
        seasonalCopy:
          "Hampton's southern Henry County location means it sees some of the county's most intense summer heat, and irrigation systems here need to be programmed to compensate. We calibrate spring startup runtimes specifically for summer demand, rather than using a moderate setting that will underperform when temperatures peak in July and August.",
        closingCopy:
          "We serve Hampton and the surrounding southern Henry County rural areas.",
        waterAuthority: "Henry County Water Authority / private well",
        soilContext: "Red clay; larger rural lots with variable grade",
        faqs: [
          { q: "Do you serve properties near Atlanta Motor Speedway?", a: "Yes — we serve all of Hampton and the surrounding areas including the rural communities off Hwy 19 and 20." },
          { q: "Can you design a system for a property that's partially wooded?", a: "Yes. Wooded areas require different head types and much lower precipitation rates than open turf. We zone them separately and design to avoid overwatering shaded areas." },
        ],
        nearbyLinks: [
          { name: "McDonough", slug: "mcdonough", countySlug: "henry-county" },
          { name: "Locust Grove", slug: "locust-grove", countySlug: "henry-county" },
          { name: "Griffin", slug: "griffin", countySlug: "spalding-county" },
        ],
      },
      {
        name: "Locust Grove",
        slug: "locust-grove",
        county: "Henry County",
        countySlug: "henry-county",
        metaTitle: "Irrigation Installation Locust Grove GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and sprinkler repair in Locust Grove, GA. Serving southern Henry County with professional irrigation service.",
        h1: "Irrigation Installation & Sprinkler Repair in Locust Grove, GA",
        intro:
          "Locust Grove has emerged as one of the more active growth areas in southern Henry County, with new subdivisions filling in along Highway 42 and near the Tanger Outlets corridor. The combination of new construction and established rural properties in the same zip code is something we navigate daily — and the two contexts require fundamentally different approaches to irrigation design.",
        installationCopy:
          "New construction in Locust Grove is often on lots that have been heavily graded and compacted during development. Before we design a zone layout, we assess the actual soil infiltration rate on the property — graded lots can be dense enough that standard precipitation rate heads will cause runoff before the water has a chance to absorb. We select heads and program runtimes based on what the soil can actually accept, not what looks good on paper.",
        repairCopy:
          "On the rural side of Locust Grove, we often encounter irrigation systems that were installed without permits or professional design — systems with no backflow prevention, controllers that were never properly programmed, and head layouts that leave large dry spots. We bring these systems into compliance and performance without making the homeowner feel judged for what they inherited.",
        seasonalCopy:
          "Locust Grove sits close enough to the Henry/Spalding county line that it shares some weather characteristics with Griffin — slightly longer dry spells in late summer than northern Henry County. We factor this into our seasonal programming recommendations, running slightly longer runtimes on turf zones during August.",
        closingCopy:
          "We serve Locust Grove and the surrounding southern Henry County communities.",
        waterAuthority: "Henry County Water Authority",
        soilContext: "Red clay with heavy compaction on newer developments",
        faqs: [
          { q: "Do you serve the Tanger Outlets area of Locust Grove?", a: "Yes — we serve both residential and light commercial properties throughout Locust Grove." },
          { q: "How do I know if my system needs a backflow preventer?", a: "If your system connects to a municipal water supply, a backflow preventer is required by code and by your water authority. We install and test them on every new system." },
        ],
        nearbyLinks: [
          { name: "Hampton", slug: "hampton", countySlug: "henry-county" },
          { name: "McDonough", slug: "mcdonough", countySlug: "henry-county" },
          { name: "Griffin", slug: "griffin", countySlug: "spalding-county" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // CLAYTON COUNTY
  // ─────────────────────────────────────────
  {
    name: "Clayton County",
    slug: "clayton-county",
    metaTitle: "Irrigation Company Clayton County GA | Atlanta Irrigation",
    metaDescription: "Irrigation installation and sprinkler repair across Clayton County, GA. Serving Jonesboro, Morrow, Forest Park, Riverdale, and surrounding communities.",
    h1: "Irrigation Services in Clayton County, GA",
    intro:
      "Clayton County is the northern boundary of our core service corridor — sitting directly between Fayette County and the city of Atlanta. The county's dense residential fabric, aging infrastructure in many communities, and significant commercial presence along the Tara Boulevard and Highway 19/41 corridors define the irrigation landscape here. We bring the same professionalism to Clayton County that we apply throughout our service area.",
    cities: [
      {
        name: "Jonesboro",
        slug: "jonesboro",
        county: "Clayton County",
        countySlug: "clayton-county",
        metaTitle: "Irrigation Company Jonesboro GA | Installation & Sprinkler Repair",
        metaDescription: "Irrigation installation and sprinkler repair in Jonesboro, GA. Clayton County's historic seat, served with professional irrigation expertise.",
        h1: "Irrigation Installation & Sprinkler Repair in Jonesboro, GA",
        intro:
          "Jonesboro is Clayton County's historic seat and one of the area's oldest communities — a city with established residential neighborhoods, mature landscaping, and an irrigation system inventory that in many cases predates modern controller technology. Our work in Jonesboro leans heavily toward assessment, repair, and system modernization rather than new installation, though we handle both.",
        installationCopy:
          "New irrigation installations in Jonesboro are most common on properties that have undergone significant landscaping investment and need a reliable water delivery system to protect it. We design around the existing mature trees and established plant material that characterize many Jonesboro properties, using drip emitters in ornamental areas where overhead spray would cause fungal issues in the shade.",
        repairCopy:
          "Jonesboro's established neighborhoods have irrigation systems at every stage of life — some original systems from the 1980s that are remarkably still functional with periodic maintenance, and some early 2000s installs that have aged poorly due to low-quality original components. We assess each system individually and give you a clear picture of what it will take to get it performing properly.",
        seasonalCopy:
          "Clayton County falls under Georgia's statewide outdoor watering restrictions, and the Clayton County Water Authority has implemented additional drought restrictions in past years. We factor current restriction status into every spring startup programming visit.",
        closingCopy:
          "We serve all of Jonesboro and the surrounding Clayton County communities.",
        waterAuthority: "Clayton County Water Authority",
        soilContext: "Red clay with heavy tree root competition in established neighborhoods",
        faqs: [
          { q: "Do you work on commercial properties in Jonesboro?", a: "Yes. We handle light commercial irrigation alongside our residential work throughout Clayton County." },
          { q: "Can you work around mature tree roots without damaging them?", a: "Yes — we hand-dig near established trees and design zone layouts that route pipe around rather than through significant root systems." },
        ],
        nearbyLinks: [
          { name: "Morrow", slug: "morrow", countySlug: "clayton-county" },
          { name: "Riverdale", slug: "riverdale", countySlug: "clayton-county" },
          { name: "McDonough", slug: "mcdonough", countySlug: "henry-county" },
        ],
      },
      {
        name: "Morrow",
        slug: "morrow",
        county: "Clayton County",
        countySlug: "clayton-county",
        metaTitle: "Irrigation Installation Morrow GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Morrow, GA. Professional Clayton County irrigation service for residential and commercial properties.",
        h1: "Irrigation Installation & Sprinkler Repair in Morrow, GA",
        intro:
          "Morrow is a compact city with a dense mix of residential, commercial, and light industrial properties clustered around the Southern Crescent area. Irrigation work here spans a similarly wide range — residential lawn systems in established neighborhoods, commercial landscape maintenance irrigation, and the occasional property that's been neglected and needs a ground-up assessment.",
        installationCopy:
          "New residential irrigation in Morrow tends to be on smaller lots than you'd find further south in the county, which means careful zone design to avoid overspray onto hardscapes and neighboring properties. We design tight, efficient systems that maximize coverage without waste — important in a city where lots are close together and runoff onto sidewalks or driveways creates complaints.",
        repairCopy:
          "Commercial irrigation repair in Morrow is a common service call — strip mall landscapes and apartment community irrigation systems that haven't been properly maintained in years. We handle commercial accounts with the same methodical diagnostic process we apply to residential work.",
        seasonalCopy:
          "Morrow's urban density means impervious surface runoff affects soil moisture levels differently than in suburban communities — properties surrounded by pavement dry out faster and need slightly more irrigation than you might expect. We account for this in our runtime programming.",
        closingCopy:
          "We serve Morrow and the surrounding Clayton County corridor.",
        waterAuthority: "Clayton County Water Authority",
        soilContext: "Red clay; urban heat island effect in denser commercial areas",
        faqs: [
          { q: "Do you service commercial landscape irrigation systems?", a: "Yes. We handle commercial accounts including retail centers and multi-family properties throughout Clayton County." },
          { q: "Can you work around existing hardscape and concrete?", a: "Yes — directional boring under concrete is something we do regularly when trenching isn't an option." },
        ],
        nearbyLinks: [
          { name: "Jonesboro", slug: "jonesboro", countySlug: "clayton-county" },
          { name: "Forest Park", slug: "forest-park", countySlug: "clayton-county" },
          { name: "Stockbridge", slug: "stockbridge", countySlug: "henry-county" },
        ],
      },
      {
        name: "Forest Park",
        slug: "forest-park",
        county: "Clayton County",
        countySlug: "clayton-county",
        metaTitle: "Irrigation Installation Forest Park GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and sprinkler repair in Forest Park, GA. Serving Clayton County residential properties with professional irrigation service.",
        h1: "Irrigation Installation & Sprinkler Repair in Forest Park, GA",
        intro:
          "Forest Park's location near the world's busiest airport and Atlanta's southern commercial corridor makes it a busy, practical community where homeowners value efficiency and reliability in their service providers. We approach Forest Park irrigation with the same directness — show up on time, diagnose accurately, fix it right, and don't oversell.",
        installationCopy:
          "Residential installation in Forest Park is primarily on modest-sized lots in established neighborhoods. We design efficiently for these properties — getting full coverage in fewer zones by selecting the right head type for each area rather than defaulting to a standard layout.",
        repairCopy:
          "Forest Park's housing stock spans several decades, and the irrigation systems in established neighborhoods reflect that age range. We handle everything from failed solenoid valves on 30-year-old systems to broken heads on recently installed systems that were damaged during landscaping work.",
        seasonalCopy:
          "Forest Park sits in the Clayton County Water Authority service area, which has implemented outdoor watering restrictions during past drought conditions. Our spring activation visits include reviewing current restriction status and programming accordingly.",
        closingCopy:
          "We serve Forest Park and the surrounding Clayton County communities along the Highway 19/41 corridor.",
        waterAuthority: "Clayton County Water Authority",
        soilContext: "Red clay; established urban tree canopy creates shade variation across properties",
        faqs: [
          { q: "How quickly can you get to Forest Park for a repair call?", a: "We run regular service routes through Clayton County and can typically schedule repair calls within a few business days." },
          { q: "Do you offer free estimates for new installation?", a: "Yes — free on-site estimates for new installation throughout our service area including Forest Park." },
        ],
        nearbyLinks: [
          { name: "Morrow", slug: "morrow", countySlug: "clayton-county" },
          { name: "Jonesboro", slug: "jonesboro", countySlug: "clayton-county" },
          { name: "Riverdale", slug: "riverdale", countySlug: "clayton-county" },
        ],
      },
      {
        name: "Riverdale",
        slug: "riverdale",
        county: "Clayton County",
        countySlug: "clayton-county",
        metaTitle: "Irrigation Company Riverdale GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and sprinkler repair in Riverdale, GA. Clayton County irrigation service you can count on.",
        h1: "Irrigation Installation & Sprinkler Repair in Riverdale, GA",
        intro:
          "Riverdale is a well-established Clayton County community with a mix of residential neighborhood types — from older ranch-style homes on larger lots to newer townhome developments. That variety is reflected in the range of irrigation work we do here, from full system installs on established single-family properties to targeted repairs on systems that have gone years without professional service.",
        installationCopy:
          "Riverdale new installs are primarily on single-family residential properties where homeowners have made meaningful landscaping investments they want to protect. We design systems that respect the existing bed layout and turf boundaries, zoning separately for shaded and sunny areas to avoid the over-irrigation that causes fungal disease in Riverdale's established tree canopy neighborhoods.",
        repairCopy:
          "Many Riverdale properties have irrigation systems that were installed during the construction boom of the 1990s and early 2000s. Controllers from that era frequently fail or lose programming after power outages. We carry replacement controllers from major brands and can usually swap and reprogram in the same visit.",
        seasonalCopy:
          "We offer annual service agreements that cover spring startup and fall shutdown for Riverdale customers who want consistent care without the hassle of scheduling seasonal visits each year.",
        closingCopy:
          "We serve all of Riverdale and the adjacent Clayton County communities.",
        waterAuthority: "Clayton County Water Authority",
        soilContext: "Red clay; mature residential tree canopy creates irrigation design complexity",
        faqs: [
          { q: "Do you offer annual maintenance agreements?", a: "Yes. Annual agreements cover spring startup, fall shutdown, and a mid-season check. It's the most straightforward way to keep your system running well." },
          { q: "My controller lost all its programming after a power outage. Can you reprogram it?", a: "Yes — reprogramming is a quick service call. If your controller is old enough that losing programming is a recurring issue, we can upgrade to a modern smart controller with cloud backup." },
        ],
        nearbyLinks: [
          { name: "Jonesboro", slug: "jonesboro", countySlug: "clayton-county" },
          { name: "Forest Park", slug: "forest-park", countySlug: "clayton-county" },
          { name: "College Park", slug: "college-park", countySlug: "clayton-county" },
        ],
      },
      {
        name: "College Park",
        slug: "college-park",
        county: "Clayton County",
        countySlug: "clayton-county",
        metaTitle: "Irrigation Installation College Park GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in College Park, GA. Serving Clayton County and South Fulton residential properties.",
        h1: "Irrigation Installation & Service in College Park, GA",
        intro:
          "College Park straddles the Clayton and Fulton county line, sitting in the shadow of Hartsfield-Jackson and serving a residential population that values its neighborhoods despite the airport's proximity. Irrigation work here is primarily residential, and the community's mature housing stock means a lot of our work involves assessing and upgrading systems that have been in the ground for 20-plus years.",
        installationCopy:
          "New installation in College Park often involves working around the mature landscaping that characterizes the city's older neighborhoods. We hand-dig near established trees, route mainlines carefully around existing root systems, and use drip emitters in tight ornamental bed areas where overhead spray would create more problems than it solves.",
        repairCopy:
          "College Park's oldest neighborhoods have irrigation systems with components that are simply at end of life — original brass impact heads, manual valves, and mechanical timer controllers. We can bring these systems into the modern era with a targeted upgrade that doesn't require replacing everything at once.",
        seasonalCopy:
          "College Park falls within both Clayton County Water Authority and South Fulton utility jurisdictions depending on the specific address. We verify water authority at the start of each service relationship to ensure we're programming to the correct watering restrictions.",
        closingCopy:
          "We serve College Park on both sides of the county line.",
        waterAuthority: "Clayton County Water Authority / City of South Fulton",
        soilContext: "Red clay; dense urban tree canopy in historic neighborhoods",
        faqs: [
          { q: "My address is College Park but I'm not sure which county I'm in. Does that affect service?", a: "It doesn't affect our service — we cover both sides. It does affect which water authority's restrictions apply to your irrigation schedule, which we'll verify when we visit." },
        ],
        nearbyLinks: [
          { name: "Riverdale", slug: "riverdale", countySlug: "clayton-county" },
          { name: "Forest Park", slug: "forest-park", countySlug: "clayton-county" },
          { name: "Fairburn", slug: "fairburn", countySlug: "fulton-county" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // SPALDING COUNTY
  // ─────────────────────────────────────────
  {
    name: "Spalding County",
    slug: "spalding-county",
    metaTitle: "Irrigation Company Spalding County GA | Atlanta Irrigation",
    metaDescription: "Irrigation installation and sprinkler repair across Spalding County, GA. Serving Griffin, Sunny Side, and surrounding communities.",
    h1: "Irrigation Services in Spalding County, GA",
    intro:
      "Spalding County sits at the southern edge of our service territory, anchored by Griffin — a mid-size city with a mix of industrial heritage, established residential neighborhoods, and surrounding rural acreage. Irrigation in Spalding County looks different than in the faster-growing suburban counties to the north. Properties here tend to be larger, ownership tenure is longer, and the expectation is for work that lasts rather than work that's quick.",
    cities: [
      {
        name: "Griffin",
        slug: "griffin",
        county: "Spalding County",
        countySlug: "spalding-county",
        metaTitle: "Irrigation Company Griffin GA | Installation & Sprinkler Repair",
        metaDescription: "Irrigation installation and sprinkler repair in Griffin, GA. Spalding County's largest city, served with professional irrigation expertise.",
        h1: "Irrigation Installation & Sprinkler Repair in Griffin, GA",
        intro:
          "Griffin is one of the older cities in our service area — a community whose residential character reflects decades of stability rather than rapid suburban growth. The homes here were built to last, the landscaping has had time to mature, and the irrigation systems, where they exist, often reflect an earlier era of irrigation technology. We do a lot of work in Griffin that involves bringing older systems up to current performance standards.",
        installationCopy:
          "New irrigation installation in Griffin is often driven by homeowners who have invested in landscape renovation and want a reliable water system to protect it. Spalding County's soil is somewhat sandier than Fayette or Coweta, which changes infiltration rates and means we can run slightly longer cycles than we would in pure clay environments. We design Griffin systems with these soil characteristics in mind.",
        repairCopy:
          "Griffin's older irrigation systems — many from the late 1980s and 1990s — use components that are increasingly hard to source. We carry a broad parts inventory specifically because we work in established markets like Griffin where older brands are still in the ground. If we can repair rather than replace, we will.",
        seasonalCopy:
          "Griffin sits far enough south that its growing season extends slightly longer than the Atlanta metro average — first frost comes later, and spring green-up starts earlier. We time our seasonal service visits to match Griffin's actual climate rather than using metro Atlanta dates that may not apply.",
        closingCopy:
          "We serve all of Griffin and the surrounding Spalding County communities.",
        waterAuthority: "City of Griffin Water / Spalding County Water",
        soilContext: "Sandy clay loam — better drainage than north Georgia red clay",
        faqs: [
          { q: "Does Spalding County's soil really require a different irrigation approach?", a: "Yes. Sandy clay loam drains faster than the dense red clay common north of here. Systems need to be programmed to run slightly longer but can handle it without the runoff issues that clay creates." },
          { q: "Do you service irrigation systems that were installed decades ago?", a: "Yes. Older systems are a specialty. We stock parts for older brands and are experienced in assessing what's worth keeping versus what needs to be replaced." },
        ],
        nearbyLinks: [
          { name: "Hampton", slug: "hampton", countySlug: "henry-county" },
          { name: "Locust Grove", slug: "locust-grove", countySlug: "henry-county" },
          { name: "Sunny Side", slug: "sunny-side", countySlug: "spalding-county" },
        ],
      },
      {
        name: "Sunny Side",
        slug: "sunny-side",
        county: "Spalding County",
        countySlug: "spalding-county",
        metaTitle: "Irrigation Installation Sunny Side GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Sunny Side, GA. Rural Spalding County properties served with professional irrigation expertise.",
        h1: "Irrigation Installation & Service in Sunny Side, GA",
        intro:
          "Sunny Side is a rural Spalding County community where the properties are large and the pace is slow. Irrigation here is almost exclusively on residential acreage — homeowners with space to maintain who want a reliable system rather than a seasonal battle with hoses and sprinklers. Well water is common, and the work requires the same attention to source capacity that we bring to all our rural service areas.",
        installationCopy:
          "Rural Spalding County installs like those common in Sunny Side require careful attention to well capacity and mainline sizing. We don't design systems that will work the well harder than it can handle — a damaged pump on a rural property is an expensive fix that proper design avoids entirely.",
        repairCopy:
          "Sunny Side repair calls are often from properties that haven't had professional service in years. We do full system audits on these properties — walking every zone, checking every head, testing valve response — so you have a clear picture of the system's actual condition before we recommend any work.",
        seasonalCopy:
          "Sunny Side's growing season and soil drainage characteristics mean irrigation systems here need to run longer per cycle than systems further north. We calibrate startup runtimes to match the actual evapotranspiration rates for southern Spalding County's climate.",
        closingCopy:
          "We serve Sunny Side and the surrounding rural Spalding County area.",
        waterAuthority: "Private well (most properties)",
        soilContext: "Sandy clay loam with good natural drainage",
        faqs: [
          { q: "Do you serve rural unincorporated Spalding County?", a: "Yes — we cover the rural areas throughout Spalding County, not just the incorporated cities." },
        ],
        nearbyLinks: [
          { name: "Griffin", slug: "griffin", countySlug: "spalding-county" },
          { name: "Hampton", slug: "hampton", countySlug: "henry-county" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // DOUGLAS COUNTY
  // ─────────────────────────────────────────
  {
    name: "Douglas County",
    slug: "douglas-county",
    metaTitle: "Irrigation Company Douglas County GA | Atlanta Irrigation",
    metaDescription: "Irrigation installation and sprinkler repair across Douglas County, GA. Serving Douglasville, Villa Rica, and Lithia Springs.",
    h1: "Irrigation Services in Douglas County, GA",
    intro:
      "Douglas County is the western anchor of metro Atlanta's suburban sprawl — a county that has grown steadily for decades as families seek more space at lower price points than the closer-in suburbs. The county's range of subdivision ages, from 1980s developments in Douglasville to recent construction in Villa Rica, means our work spans the full spectrum of irrigation system ages and conditions.",
    cities: [
      {
        name: "Douglasville",
        slug: "douglasville",
        county: "Douglas County",
        countySlug: "douglas-county",
        metaTitle: "Irrigation Company Douglasville GA | Installation & Sprinkler Repair",
        metaDescription: "Irrigation installation and sprinkler repair in Douglasville, GA. Douglas County's largest city served with professional irrigation expertise.",
        h1: "Irrigation Installation & Sprinkler Repair in Douglasville, GA",
        intro:
          "Douglasville is Douglas County's largest city and one of metro Atlanta's established western suburbs. Its residential landscape spans 40 years of development — from the older neighborhoods near downtown Douglasville to more recent construction along the I-20 corridor toward the county line. Irrigation needs vary accordingly, and we're experienced in every phase of system age.",
        installationCopy:
          "New irrigation installation in Douglasville's newer subdivisions follows our standard process — flow test, zone design, head selection calibrated to Georgia red clay soil, and smart controller installation. In established Douglasville neighborhoods, installation requires more care around mature landscaping and the older utility infrastructure common in neighborhoods built before underground service lines were standard.",
        repairCopy:
          "Douglasville has a large inventory of mid-age irrigation systems from the 1990s and early 2000s that are entering their high-maintenance phase. Controller failures, poly pipe brittleness, and valve solenoid burnout are the most common issues in this age bracket. We handle all of it efficiently and carry the parts to fix the most common problems on the first visit.",
        seasonalCopy:
          "Douglas County Water and Sewer Authority implements outdoor watering restrictions during drought conditions. We stay current on restriction schedules and ensure every system we program complies with current rules at the time of service.",
        closingCopy:
          "We serve all of Douglasville and the surrounding Douglas County communities.",
        waterAuthority: "Douglas County Water and Sewer Authority",
        soilContext: "Red clay; grade variation in older hillside neighborhoods",
        faqs: [
          { q: "Do you service the neighborhoods near downtown Douglasville?", a: "Yes — we work throughout Douglasville including the older established neighborhoods near downtown." },
          { q: "Can you install a system on a sloped lot?", a: "Yes. Sloped lots require pressure-compensating heads and careful zone design to achieve uniform coverage. We design for slope as a standard part of our process." },
        ],
        nearbyLinks: [
          { name: "Villa Rica", slug: "villa-rica", countySlug: "douglas-county" },
          { name: "Lithia Springs", slug: "lithia-springs", countySlug: "douglas-county" },
          { name: "Carrollton", slug: "carrollton", countySlug: "carroll-county" },
        ],
      },
      {
        name: "Villa Rica",
        slug: "villa-rica",
        county: "Douglas County",
        countySlug: "douglas-county",
        metaTitle: "Irrigation Installation Villa Rica GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Villa Rica, GA. Serving Douglas and Carroll County border communities with professional irrigation service.",
        h1: "Irrigation Installation & Sprinkler Repair in Villa Rica, GA",
        intro:
          "Villa Rica straddles the Douglas and Carroll county line, and its growth has accelerated in recent years as the I-20 corridor has pushed westward. It's a city in transition — older established areas near the historic downtown alongside aggressive new subdivision development that has brought thousands of new homes to the area in the last decade.",
        installationCopy:
          "Villa Rica's new construction boom means a lot of homeowners are moving into properties where irrigation either doesn't exist or was installed by the builder to minimum spec. We handle both scenarios. For properties without systems, we design from scratch. For builder-grade installs, we assess what's there and recommend targeted improvements that make a meaningful difference in performance.",
        repairCopy:
          "In Villa Rica's newer neighborhoods, the most common repair calls involve head damage from landscaping crews and controller issues on systems that were never properly set up after the original installation. These are quick fixes in most cases. In older Villa Rica neighborhoods, the repair picture is similar to what we see in Douglasville — aging components that need attention.",
        seasonalCopy:
          "Villa Rica's position on the Douglas/Carroll county line means it can see weather patterns from both directions. Spring startup timing varies slightly year to year — we base our seasonal visit scheduling on actual forecast data rather than a fixed calendar date.",
        closingCopy:
          "We serve Villa Rica on both sides of the county line.",
        waterAuthority: "City of Villa Rica Water",
        soilContext: "Red clay transitioning to more varied soil profiles near the Carroll County line",
        faqs: [
          { q: "Do you serve the Carroll County side of Villa Rica?", a: "Yes — we cover both the Douglas and Carroll County portions of the Villa Rica area." },
        ],
        nearbyLinks: [
          { name: "Douglasville", slug: "douglasville", countySlug: "douglas-county" },
          { name: "Carrollton", slug: "carrollton", countySlug: "carroll-county" },
          { name: "Lithia Springs", slug: "lithia-springs", countySlug: "douglas-county" },
        ],
      },
      {
        name: "Lithia Springs",
        slug: "lithia-springs",
        county: "Douglas County",
        countySlug: "douglas-county",
        metaTitle: "Irrigation Installation Lithia Springs GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Lithia Springs, GA. Douglas County residential irrigation service, professional and locally owned.",
        h1: "Irrigation Installation & Sprinkler Repair in Lithia Springs, GA",
        intro:
          "Lithia Springs is one of the more densely developed communities in Douglas County, sitting close to the I-20 interchange and serving a residential population that's been growing steadily for decades. Properties here tend to be mid-size, well-established, and in need of the kind of thorough irrigation service that many Douglas County contractors have historically underdelivered.",
        installationCopy:
          "Lithia Springs residential lots tend toward the quarter-to-half-acre range — manageable for a 4–6 zone system that we can design, install, and commission in a single day. We design for the property, not from a template, which means taking actual sun exposure, soil condition, and plant material into account before we spec a single head.",
        repairCopy:
          "Lithia Springs has a large number of irrigation systems from the late 1990s to early 2000s that are now showing their age consistently. We run efficient repair routes through Douglas County and can typically schedule service within a reasonable window.",
        seasonalCopy:
          "Douglas County's outdoor watering restrictions apply to Lithia Springs, and we factor current restriction status into our spring startup programming at every visit.",
        closingCopy:
          "We serve Lithia Springs and the broader Douglas County I-20 corridor.",
        waterAuthority: "Douglas County Water and Sewer Authority",
        soilContext: "Red clay; relatively flat terrain makes zone design straightforward",
        faqs: [
          { q: "How long does installation take on a typical Lithia Springs lot?", a: "Most installations in Lithia Springs are completed in one day. We schedule a consultation first to confirm scope before committing to a timeline." },
        ],
        nearbyLinks: [
          { name: "Douglasville", slug: "douglasville", countySlug: "douglas-county" },
          { name: "Villa Rica", slug: "villa-rica", countySlug: "douglas-county" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // CARROLL COUNTY
  // ─────────────────────────────────────────
  {
    name: "Carroll County",
    slug: "carroll-county",
    metaTitle: "Irrigation Company Carroll County GA | Atlanta Irrigation",
    metaDescription: "Irrigation installation and sprinkler repair across Carroll County, GA. Serving Carrollton, Temple, Bremen, and surrounding communities.",
    h1: "Irrigation Services in Carroll County, GA",
    intro:
      "Carroll County is the western edge of our service area — a county anchored by Carrollton and the University of West Georgia, with surrounding rural communities that have their own distinct character. Irrigation demand here is strong but underserved, and we see a market where homeowners have historically had limited access to professional irrigation service.",
    cities: [
      {
        name: "Carrollton",
        slug: "carrollton",
        county: "Carroll County",
        countySlug: "carroll-county",
        metaTitle: "Irrigation Company Carrollton GA | Installation & Sprinkler Repair",
        metaDescription: "Irrigation installation and sprinkler repair in Carrollton, GA. Carroll County's largest city served by Atlanta Irrigation.",
        h1: "Irrigation Installation & Sprinkler Repair in Carrollton, GA",
        intro:
          "Carrollton is a college town with a stable, diverse residential base — faculty and staff neighborhoods near UWG, established family neighborhoods throughout the city, and newer development on the outskirts along the bypass corridors. Irrigation needs vary by neighborhood age, and we design for each context rather than applying a one-size approach.",
        installationCopy:
          "New irrigation in Carrollton's established neighborhoods requires patience around mature landscaping and careful planning around the utility infrastructure common in older areas. In newer construction near the Carrollton bypass, we work with homeowners installing systems at the sod stage — the optimal time to get irrigation established alongside a new landscape.",
        repairCopy:
          "Carrollton has a portion of older irrigation systems that have simply never had professional service. We approach these properties with a full diagnostic mindset — assessing everything from the backflow assembly to the controller program before recommending any work.",
        seasonalCopy:
          "Carroll County's westernmost position in our service area means it can receive weather systems from Alabama slightly ahead of the rest of metro Atlanta. Late-season heat events in September are common, and summer irrigation demand runs higher than you might program for in spring. We build this into our calibration recommendations.",
        closingCopy:
          "We serve all of Carrollton and the surrounding Carroll County communities.",
        waterAuthority: "City of Carrollton Water",
        soilContext: "Red clay with some variation toward sandier profiles in rural Carroll County",
        faqs: [
          { q: "Do you serve properties near the University of West Georgia?", a: "Yes — we serve all of Carrollton including the neighborhoods near UWG." },
          { q: "Do you handle irrigation for rental properties?", a: "Yes. We work with property owners and landlords throughout Carroll County on both installation and ongoing maintenance." },
        ],
        nearbyLinks: [
          { name: "Villa Rica", slug: "villa-rica", countySlug: "douglas-county" },
          { name: "Temple", slug: "temple", countySlug: "carroll-county" },
          { name: "Bremen", slug: "bremen", countySlug: "carroll-county" },
        ],
      },
      {
        name: "Temple",
        slug: "temple",
        county: "Carroll County",
        countySlug: "carroll-county",
        metaTitle: "Irrigation Installation Temple GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Temple, GA. Carroll County residential irrigation service.",
        h1: "Irrigation Installation & Service in Temple, GA",
        intro:
          "Temple is a small Carroll County city that has experienced quiet but steady residential growth as families seek affordable properties within the broader west Georgia market. Properties here tend toward the mid-size residential profile — enough lot to benefit from irrigation but often without an existing system. We see strong first-time installation demand in Temple.",
        installationCopy:
          "First-time irrigation installations in Temple follow our standard design-to-flow-rate process. Many Temple properties are on City of Temple water, which has adequate pressure for a standard 4–6 zone system. We confirm pressure at the point of connection before designing the system to ensure we're not over- or under-speccing the mainline.",
        repairCopy:
          "Where irrigation systems do exist in Temple, they're often DIY installs that were done without proper design or backflow prevention. We assess these systems honestly and give homeowners a realistic picture of what it would take to get them performing correctly and code-compliant.",
        seasonalCopy:
          "Temple's Carroll County location means it follows the same seasonal service windows as Carrollton — spring startup in mid-March and fall shutdown before the first forecast freeze.",
        closingCopy:
          "We serve Temple and the surrounding Carroll County communities.",
        waterAuthority: "City of Temple Water",
        soilContext: "Red clay; rural lots outside city limits often on well water",
        faqs: [
          { q: "I've never had irrigation before. Where do I start?", a: "A free on-site estimate is the right starting point. We'll walk the property, discuss your goals, and give you a clear scope and cost before any commitment." },
        ],
        nearbyLinks: [
          { name: "Carrollton", slug: "carrollton", countySlug: "carroll-county" },
          { name: "Bremen", slug: "bremen", countySlug: "carroll-county" },
          { name: "Villa Rica", slug: "villa-rica", countySlug: "douglas-county" },
        ],
      },
      {
        name: "Bremen",
        slug: "bremen",
        county: "Carroll County",
        countySlug: "carroll-county",
        metaTitle: "Irrigation Installation Bremen GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Bremen, GA. Serving Carroll County's northern communities with professional irrigation service.",
        h1: "Irrigation Installation & Service in Bremen, GA",
        intro:
          "Bremen is Carroll County's northern anchor — a small city with a tight-knit community and properties that run from in-town residential lots to the larger rural parcels that define the county's agricultural heritage. Irrigation in Bremen is a market where professional service has historically been hard to find, and we fill that gap.",
        installationCopy:
          "Bremen residential installs are straightforward — municipal water connections, mid-size lots, and straightforward turf and bed configurations. We design and install efficiently and leave customers with a properly programmed controller and a written summary of the system layout.",
        repairCopy:
          "Bremen's rural fringe properties sometimes have well-fed irrigation systems that haven't had professional attention in years. We bring these properties current — assessing well capacity, checking every component, and giving a full picture of the system's condition.",
        seasonalCopy:
          "Bremen follows the same Carroll County seasonal service windows. We offer annual agreements that cover the full seasonal cycle for customers who want the peace of mind of scheduled visits.",
        closingCopy:
          "We serve Bremen and the surrounding northern Carroll County area.",
        waterAuthority: "City of Bremen Water / private well",
        soilContext: "Red clay in town; varied rural profiles on acreage properties",
        faqs: [
          { q: "Do you service rural properties outside Bremen's city limits?", a: "Yes — we cover the rural Carroll County areas including properties on well water." },
        ],
        nearbyLinks: [
          { name: "Carrollton", slug: "carrollton", countySlug: "carroll-county" },
          { name: "Temple", slug: "temple", countySlug: "carroll-county" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // COBB COUNTY
  // ─────────────────────────────────────────
  {
    name: "Cobb County",
    slug: "cobb-county",
    metaTitle: "Irrigation Company Cobb County GA | Atlanta Irrigation",
    metaDescription: "Irrigation installation and sprinkler repair across Cobb County, GA. Serving Marietta, Smyrna, Kennesaw, Acworth, and Powder Springs.",
    h1: "Irrigation Services in Cobb County, GA",
    intro:
      "Cobb County is one of Georgia's most affluent and established suburban counties, with a mature residential market and high standards for landscaping and property maintenance. The county's range spans from historic neighborhoods in Marietta to lakefront communities around Allatoona and the dense suburban corridors of Smyrna and Kennesaw. Irrigation demand here is strong, and homeowners expect quality work.",
    cities: [
      {
        name: "Marietta",
        slug: "marietta",
        county: "Cobb County",
        countySlug: "cobb-county",
        metaTitle: "Irrigation Company Marietta GA | Installation & Sprinkler Repair",
        metaDescription: "Irrigation installation and sprinkler repair in Marietta, GA. Cobb County's historic city served with professional irrigation expertise.",
        h1: "Irrigation Installation & Sprinkler Repair in Marietta, GA",
        intro:
          "Marietta is one of the most landscaping-conscious cities in metro Atlanta — a community where curb appeal matters, HOA standards are high, and homeowners invest meaningfully in their outdoor spaces. That investment makes proper irrigation non-negotiable. We serve Marietta with the attention to detail the market demands.",
        installationCopy:
          "Marietta installation spans a wide range of property types — from historic homes in the Whitlock Avenue area with established gardens and mature trees, to newer construction in gated communities off Sandy Plains Road. Each requires a different design conversation. Historic properties get careful root avoidance and drip irrigation in established beds. Newer properties get systems optimized for the fresh sod and ornamental plantings that accompany new construction.",
        repairCopy:
          "Marietta's established residential base means we see irrigation systems at every stage of life. Systems in the older Sandy Springs and East Cobb neighborhoods from the 1990s are entering their peak repair phase — controllers failing, solenoids burning out, poly pipe cracking. We handle all of it efficiently and are honest about which repairs make economic sense versus when a partial system replacement is the right call.",
        seasonalCopy:
          "Cobb County Marietta Water implements drought-response watering restrictions that can change year to year. We stay current on these and program accordingly at every spring startup visit.",
        closingCopy:
          "We serve all of Marietta including East Cobb, West Marietta, and the communities along the Sandy Plains and Canton Road corridors.",
        waterAuthority: "Cobb County Marietta Water Authority",
        soilContext: "Red clay with significant grade variation in hillside neighborhoods; mature tree root competition in established areas",
        faqs: [
          { q: "Do you work in East Cobb?", a: "Yes — East Cobb is one of our active Cobb County service areas." },
          { q: "Can you design irrigation for a sloped Marietta lot?", a: "Yes. Slope design is something we handle regularly in Marietta's hillside neighborhoods — pressure-compensating heads and careful zone layout are the key tools." },
        ],
        nearbyLinks: [
          { name: "Smyrna", slug: "smyrna", countySlug: "cobb-county" },
          { name: "Kennesaw", slug: "kennesaw", countySlug: "cobb-county" },
          { name: "Powder Springs", slug: "powder-springs", countySlug: "cobb-county" },
        ],
      },
      {
        name: "Smyrna",
        slug: "smyrna",
        county: "Cobb County",
        countySlug: "cobb-county",
        metaTitle: "Irrigation Installation Smyrna GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and sprinkler repair in Smyrna, GA. Serving Cobb County's dense residential communities with professional irrigation service.",
        h1: "Irrigation Installation & Sprinkler Repair in Smyrna, GA",
        intro:
          "Smyrna has transformed dramatically over the last two decades — a city that evolved from a suburban bedroom community into one of metro Atlanta's most desirable in-town neighborhoods. The Village at Smyrna, the development around Truist Park, and the infill residential projects throughout the city have brought a new generation of homeowners who take their outdoor spaces seriously.",
        installationCopy:
          "Smyrna's mix of older ranch homes, renovated mid-century properties, and new townhome construction creates a varied installation landscape. Older properties often have no irrigation at all, or systems so outdated they're effectively starting over. New construction and renovated properties want efficient, smart systems that can be managed from a phone. We design for the property in front of us, not for a market average.",
        repairCopy:
          "Smyrna's renovation wave has meant a lot of irrigation systems that were buried and forgotten during construction are suddenly needed again. We frequently diagnose systems that were accidentally damaged during renovations — cut laterals, crushed heads, disconnected valve wiring. We trace these issues systematically and repair without guesswork.",
        seasonalCopy:
          "Smyrna's urban density creates microclimate variation — properties surrounded by impervious surface dry out faster than those with more green space around them. We account for this in our runtime calibration.",
        closingCopy:
          "We serve all of Smyrna including the Village at Smyrna area, the communities near Truist Park, and the established neighborhoods throughout the city.",
        waterAuthority: "Cobb County Marietta Water Authority",
        soilContext: "Red clay; urban heat island effect in denser neighborhoods",
        faqs: [
          { q: "Do you serve the townhome communities in Smyrna?", a: "Yes, where the HOA allows individual unit irrigation systems. We can advise on HOA-compliant options for townhome properties." },
        ],
        nearbyLinks: [
          { name: "Marietta", slug: "marietta", countySlug: "cobb-county" },
          { name: "Kennesaw", slug: "kennesaw", countySlug: "cobb-county" },
        ],
      },
      {
        name: "Kennesaw",
        slug: "kennesaw",
        county: "Cobb County",
        countySlug: "cobb-county",
        metaTitle: "Irrigation Installation Kennesaw GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Kennesaw, GA. Serving Cobb County residential communities with professional irrigation service.",
        h1: "Irrigation Installation & Sprinkler Repair in Kennesaw, GA",
        intro:
          "Kennesaw is a large, established Cobb County city whose residential landscape spans four decades of suburban development. Kennesaw State University drives a significant student and faculty population, and the city's northern location near the Cherokee County line brings a mix of subdivision types from 1980s ranch homes to recent executive-level construction.",
        installationCopy:
          "Kennesaw installation work ranges from straightforward residential installs on established lots to more complex projects on the newer executive properties north of Barrett Parkway. We design every system to the property — soil conditions in northern Kennesaw differ from those closer to I-75, and we adjust precipitation rates and zone configurations accordingly.",
        repairCopy:
          "The large number of 1990s-era homes in Kennesaw means we see a lot of mid-age system repairs — original controllers, failing solenoids, and poly pipe that has become rigid after 25 years in the ground. We carry parts for the major brands that dominated installs in that era.",
        seasonalCopy:
          "Kennesaw's position in northern Cobb County means it sees slightly earlier frost dates than southern Cobb communities. We adjust fall shutdown timing accordingly — typically targeting early November rather than late November.",
        closingCopy:
          "We serve all of Kennesaw including the Barrett Parkway corridor, the communities near KSU, and the northern Cobb areas toward Acworth.",
        waterAuthority: "Cobb County Marietta Water Authority",
        soilContext: "Red clay; grade variation increases in northern Kennesaw toward the Allatoona watershed",
        faqs: [
          { q: "Do you serve properties near Kennesaw State University?", a: "Yes — we serve all of Kennesaw regardless of proximity to KSU." },
        ],
        nearbyLinks: [
          { name: "Acworth", slug: "acworth", countySlug: "cobb-county" },
          { name: "Marietta", slug: "marietta", countySlug: "cobb-county" },
          { name: "Powder Springs", slug: "powder-springs", countySlug: "cobb-county" },
        ],
      },
      {
        name: "Acworth",
        slug: "acworth",
        county: "Cobb County",
        countySlug: "cobb-county",
        metaTitle: "Irrigation Installation Acworth GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and sprinkler repair in Acworth, GA. Lake Allatoona area properties and Cobb County neighborhoods served professionally.",
        h1: "Irrigation Installation & Sprinkler Repair in Acworth, GA",
        intro:
          "Acworth is defined by two things: its proximity to Lake Allatoona and its position at the northern edge of Cobb County's suburban development. The lake brings lakefront properties with unique irrigation challenges — grade changes, mature lakeside vegetation, and the kind of landscape investment that demands a reliable water delivery system. The suburban corridors bring the full range of subdivision-era systems we see throughout the county.",
        installationCopy:
          "Lakefront and lake-view properties in Acworth require irrigation design that respects the grade and manages runoff carefully — nobody wants fertilizer and irrigation water running into Allatoona. We design systems on these properties with reduced precipitation rates, precise zone boundaries at property edges, and smart controllers that shut off before rain events. For standard residential installs in Acworth's subdivisions, we follow our standard process.",
        repairCopy:
          "Acworth's mix of lake properties and subdivision homes means repair calls are varied. Lake properties often have pump-fed systems drawing from the lake itself — these require pump maintenance expertise alongside standard irrigation knowledge. Subdivision systems follow the standard mid-age repair pattern common throughout Cobb County.",
        seasonalCopy:
          "Acworth's northern Cobb position means slightly earlier fall shutdown than southern parts of the county. Lake-adjacent properties also need careful attention during spring startup to verify pump priming and screen condition before the season begins.",
        closingCopy:
          "We serve all of Acworth including the Lake Allatoona lakefront communities and the residential subdivisions throughout the city.",
        waterAuthority: "City of Acworth Water / Cobb County Marietta Water Authority",
        soilContext: "Red clay; significant grade variation on lake-adjacent properties",
        faqs: [
          { q: "Do you work on lake-fed irrigation systems?", a: "Yes. Lake-fed systems require pump maintenance expertise that not all irrigation contractors have. We're experienced with these systems and can handle both irrigation and pump-side diagnostics." },
        ],
        nearbyLinks: [
          { name: "Kennesaw", slug: "kennesaw", countySlug: "cobb-county" },
          { name: "Marietta", slug: "marietta", countySlug: "cobb-county" },
        ],
      },
      {
        name: "Powder Springs",
        slug: "powder-springs",
        county: "Cobb County",
        countySlug: "cobb-county",
        metaTitle: "Irrigation Installation Powder Springs GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Powder Springs, GA. West Cobb County residential irrigation service.",
        h1: "Irrigation Installation & Sprinkler Repair in Powder Springs, GA",
        intro:
          "Powder Springs is west Cobb County's residential hub — a community with strong neighborhood identity and homeowners who take genuine pride in their properties. The city has grown significantly over the last 20 years, and the result is an irrigation market with new installs, mid-age repairs, and older system modernizations all in demand simultaneously.",
        installationCopy:
          "Powder Springs installation work is primarily on mid-size residential lots, and we design systems that cover them completely without wasting water on hardscapes or neighboring properties. West Cobb's soil is consistently red clay, and we program our controllers conservatively to prevent the runoff that clay creates when irrigation rates exceed infiltration capacity.",
        repairCopy:
          "Powder Springs has a large 2000s-era housing inventory whose irrigation systems are entering their active repair phase. We run regular service routes through west Cobb County and can typically schedule repair visits within a reasonable window.",
        seasonalCopy:
          "Powder Springs follows Cobb County's seasonal service windows. We offer combined service visits for customers in Powder Springs who also own property elsewhere in our service area.",
        closingCopy:
          "We serve all of Powder Springs and the surrounding west Cobb County communities.",
        waterAuthority: "Cobb County Marietta Water Authority",
        soilContext: "Red clay throughout; rolling terrain in older west Cobb neighborhoods",
        faqs: [
          { q: "Do you serve the communities along the Lost Mountain Road corridor?", a: "Yes — we serve all of west Cobb County including the Lost Mountain area." },
        ],
        nearbyLinks: [
          { name: "Marietta", slug: "marietta", countySlug: "cobb-county" },
          { name: "Kennesaw", slug: "kennesaw", countySlug: "cobb-county" },
          { name: "Douglasville", slug: "douglasville", countySlug: "douglas-county" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // FULTON COUNTY
  // ─────────────────────────────────────────
  {
    name: "Fulton County",
    slug: "fulton-county",
    metaTitle: "Irrigation Company Fulton County GA | Atlanta Irrigation",
    metaDescription: "Irrigation installation and sprinkler repair across Fulton County, GA. Serving South Fulton, Fairburn, Palmetto, Union City, and Sandy Springs.",
    h1: "Irrigation Services in Fulton County, GA",
    intro:
      "Fulton County is the heart of metro Atlanta, spanning from Sandy Springs in the north to Palmetto at the southern county line. Our focus within Fulton County is the southern corridor — Fairburn, Palmetto, Union City, and South Fulton — where our Fayette and Coweta County customer base naturally overlaps. We also serve Sandy Springs and the northern Fulton communities for customers seeking a south-metro contractor with a proven track record.",
    cities: [
      {
        name: "Fairburn",
        slug: "fairburn",
        county: "Fulton County",
        countySlug: "fulton-county",
        metaTitle: "Irrigation Company Fairburn GA | Installation & Sprinkler Repair",
        metaDescription: "Irrigation installation and sprinkler repair in Fairburn, GA. South Fulton County served with professional irrigation expertise.",
        h1: "Irrigation Installation & Sprinkler Repair in Fairburn, GA",
        intro:
          "Fairburn is the southern Fulton County community closest to our Fayette County base, and it's one of the areas where we see the clearest overlap between our core market and the broader metro. The city has absorbed significant residential growth from families priced out of Fayette County, and many of those homeowners bring the same expectations for landscape quality.",
        installationCopy:
          "Fairburn's newer developments along the Highway 74 and Ronald Reagan Parkway corridors are where most of our new installation work happens in this market. These are fresh lots, newly sodded, with homeowners who understand the value of getting irrigation right from the beginning. We design systems on these properties that are built to perform for 15-plus years, not to a builder's minimum cost.",
        repairCopy:
          "Older Fairburn neighborhoods near the historic downtown have irrigation systems that reflect their age — poly pipe, brass heads, and mechanical controllers that have been running since the 1990s. We assess these systems with fresh eyes and give honest recommendations on what to repair versus replace.",
        seasonalCopy:
          "Fairburn's Fulton County location means it falls under Georgia's statewide outdoor watering schedule, and we program every system we service to comply with current restrictions.",
        closingCopy:
          "We serve all of Fairburn and the surrounding South Fulton corridor.",
        waterAuthority: "City of Fairburn Water / Fulton County",
        soilContext: "Red clay; grade variation increases near the Bear Creek watershed",
        faqs: [
          { q: "Do you serve the new subdivisions along Ronald Reagan Parkway?", a: "Yes — the Ronald Reagan Parkway corridor is one of our active South Fulton service areas." },
        ],
        nearbyLinks: [
          { name: "Palmetto", slug: "palmetto", countySlug: "fulton-county" },
          { name: "Peachtree City", slug: "peachtree-city", countySlug: "fayette-county" },
          { name: "Union City", slug: "union-city", countySlug: "fulton-county" },
        ],
      },
      {
        name: "Palmetto",
        slug: "palmetto",
        county: "Fulton County",
        countySlug: "fulton-county",
        metaTitle: "Irrigation Installation Palmetto GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Palmetto, GA. South Fulton County rural and residential irrigation service.",
        h1: "Irrigation Installation & Service in Palmetto, GA",
        intro:
          "Palmetto is the southernmost city in Fulton County, sitting at the convergence of Fulton, Coweta, and Fayette counties. Its rural character is more pronounced than most of Fulton County — properties are larger, the pace is slower, and irrigation needs often reflect that agricultural heritage. It's a community that feels more like our Coweta County base than the urban Fulton County most people picture.",
        installationCopy:
          "Palmetto installations often involve larger lots than we see in more northern Fulton communities. Well water is not uncommon here, and we approach every Palmetto install with the same well-capacity assessment process we apply in Tyrone or Brooks. For municipal connections, we design to Fulton County's service pressure and size systems for the longer lateral runs that larger lots require.",
        repairCopy:
          "Palmetto properties with existing irrigation systems often haven't had professional service in years. We conduct thorough assessments on these systems and give straightforward recommendations — no pressure to replace what can be repaired.",
        seasonalCopy:
          "Palmetto's tri-county border position means it shares weather characteristics with our Fayette and Coweta markets. Spring startup timing and fall shutdown windows are consistent with what we use throughout the south metro corridor.",
        closingCopy:
          "We serve Palmetto and the surrounding South Fulton County rural communities.",
        waterAuthority: "City of Palmetto Water / private well",
        soilContext: "Red clay; larger rural lots with some sandy loam near creek drainages",
        faqs: [
          { q: "I'm on the Fulton/Coweta county line. Do you still service my property?", a: "Yes — we serve properties throughout the South Fulton corridor and across all three counties that converge near Palmetto." },
        ],
        nearbyLinks: [
          { name: "Fairburn", slug: "fairburn", countySlug: "fulton-county" },
          { name: "Newnan", slug: "newnan", countySlug: "coweta-county" },
          { name: "Peachtree City", slug: "peachtree-city", countySlug: "fayette-county" },
        ],
      },
      {
        name: "Union City",
        slug: "union-city",
        county: "Fulton County",
        countySlug: "fulton-county",
        metaTitle: "Irrigation Installation Union City GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and sprinkler repair in Union City, GA. South Fulton County irrigation service.",
        h1: "Irrigation Installation & Sprinkler Repair in Union City, GA",
        intro:
          "Union City is a South Fulton community positioned along the I-85 corridor — a dense residential market with a mix of established neighborhoods and newer development that has followed the highway's growth. Irrigation work here is primarily residential, and we see a market where professional service has historically been sporadic.",
        installationCopy:
          "Union City lots are typically in the quarter-to-half-acre range — well suited to a 4–6 zone system that we can install efficiently in a single day. We design for full coverage without waste, calibrating our precipitation rates to the red clay soil that's consistent throughout South Fulton.",
        repairCopy:
          "Union City repair calls often involve systems that haven't had professional service since installation. We conduct full diagnostics before recommending any work, and we give clear, honest assessments of what each repair will accomplish.",
        seasonalCopy:
          "Union City follows Georgia's statewide outdoor watering schedule. We stay current on any South Fulton or Fulton County specific restrictions that may layer on top of the state schedule.",
        closingCopy:
          "We serve Union City and the surrounding South Fulton communities along the I-85 corridor.",
        waterAuthority: "City of Union City Water",
        soilContext: "Red clay; relatively flat terrain along the I-85 corridor",
        faqs: [
          { q: "Do you serve apartment communities or only single-family homes?", a: "We focus on single-family residential and light commercial properties throughout our service area." },
        ],
        nearbyLinks: [
          { name: "Fairburn", slug: "fairburn", countySlug: "fulton-county" },
          { name: "College Park", slug: "college-park", countySlug: "clayton-county" },
        ],
      },
      {
        name: "Sandy Springs",
        slug: "sandy-springs",
        county: "Fulton County",
        countySlug: "fulton-county",
        metaTitle: "Irrigation Installation Sandy Springs GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and sprinkler repair in Sandy Springs, GA. North Fulton County's most affluent community served by Atlanta Irrigation.",
        h1: "Irrigation Installation & Sprinkler Repair in Sandy Springs, GA",
        intro:
          "Sandy Springs is one of metro Atlanta's most affluent communities, and the landscape standards here reflect that. Mature river corridor properties along the Chattahoochee, executive-level homes with significant ornamental gardens, and high-density infill development near Perimeter Center all present distinct irrigation challenges. We bring the precision and professionalism that Sandy Springs properties demand.",
        installationCopy:
          "Sandy Springs installation work is among the most technically demanding in our service area. Properties along the Chattahoochee have grade challenges, erosion sensitivity, and in some cases environmental setback requirements that affect irrigation design. Executive properties with large ornamental garden areas require multi-zone systems with separate programming for turf, perennial beds, shrub beds, and specimen trees. We design these complex systems with the same care we apply to simpler installs.",
        repairCopy:
          "Sandy Springs has an established residential base with irrigation systems at every age and quality level. High-end properties often have commercial-grade systems installed by premium contractors — these require the same expertise to service properly. We handle complex Hunter and Rain Bird commercial-grade systems alongside standard residential equipment.",
        seasonalCopy:
          "Sandy Springs falls under City of Sandy Springs and Fulton County water authority jurisdiction depending on the specific address. We verify the applicable water authority and restriction schedule at every service visit.",
        closingCopy:
          "We serve Sandy Springs including the Chattahoochee corridor, the Perimeter Center area, and the residential communities throughout the city.",
        waterAuthority: "City of Sandy Springs / Fulton County",
        soilContext: "Red clay and rocky substrate near the Chattahoochee; significant grade variation throughout",
        faqs: [
          { q: "Do you work on high-end properties with complex multi-zone systems?", a: "Yes. Complex multi-zone systems are something we design and service regularly. Sandy Springs is one of our more technically demanding markets and we're well equipped for it." },
          { q: "Do you handle Chattahoochee-adjacent properties with setback requirements?", a: "Yes — we're familiar with the environmental setback and erosion control requirements that apply to properties near the Chattahoochee corridor." },
        ],
        nearbyLinks: [
          { name: "Marietta", slug: "marietta", countySlug: "cobb-county" },
          { name: "Dunwoody", slug: "dunwoody", countySlug: "dekalb-county" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // DEKALB COUNTY
  // ─────────────────────────────────────────
  {
    name: "DeKalb County",
    slug: "dekalb-county",
    metaTitle: "Irrigation Company DeKalb County GA | Atlanta Irrigation",
    metaDescription: "Irrigation installation and sprinkler repair across DeKalb County, GA. Serving Decatur, Tucker, Stone Mountain, Lithonia, and Dunwoody.",
    h1: "Irrigation Services in DeKalb County, GA",
    intro:
      "DeKalb County is one of metro Atlanta's most diverse counties — spanning from the dense, walkable neighborhoods of Decatur to the suburban corridors of Tucker and the rural edges near the Rockdale County line. Irrigation in DeKalb requires flexibility: we work on small urban lots, large suburban properties, and everything in between. Our approach in DeKalb is the same as everywhere we work — design to the property, not to a template.",
    cities: [
      {
        name: "Decatur",
        slug: "decatur",
        county: "DeKalb County",
        countySlug: "dekalb-county",
        metaTitle: "Irrigation Company Decatur GA | Installation & Sprinkler Repair",
        metaDescription: "Irrigation installation and sprinkler repair in Decatur, GA. Urban DeKalb County lots served with precise, professional irrigation design.",
        h1: "Irrigation Installation & Sprinkler Repair in Decatur, GA",
        intro:
          "Decatur is one of metro Atlanta's most desirable communities — a walkable, nationally recognized city with mature neighborhoods, thoughtfully landscaped properties, and homeowners who care deeply about their outdoor spaces. Irrigation design in Decatur requires a level of precision that larger suburban lots don't demand: small lots, close neighbors, tight bed configurations, and mature trees that need to be worked around carefully.",
        installationCopy:
          "Decatur installs are technically precise work. Lots are often under a quarter acre, and getting full turf and bed coverage without overspray onto sidewalks, driveways, and neighboring properties requires careful head selection and exact zone boundaries. We use a higher proportion of rotary nozzles and micro-spray heads in Decatur than we would on a larger suburban lot — the precision tools that make small-lot irrigation work properly.",
        repairCopy:
          "Decatur's older housing stock means we see irrigation systems of considerable age in excellent neighborhoods. Original copper mainlines, brass heads, and mechanical controllers are not unusual. We assess these systems on their merits — a well-maintained older system can often be brought to modern performance standards with targeted updates.",
        seasonalCopy:
          "Decatur falls under DeKalb County Department of Watershed Management's jurisdiction, which has implemented outdoor watering restrictions during drought conditions. We stay current on restriction schedules and program accordingly.",
        closingCopy:
          "We serve all of Decatur including the neighborhoods within the city limits and the surrounding unincorporated areas.",
        waterAuthority: "DeKalb County Department of Watershed Management",
        soilContext: "Variable — red clay in some areas, amended urban soils in established neighborhoods with long landscaping histories",
        faqs: [
          { q: "Can you design irrigation for a very small urban lot?", a: "Yes. Small-lot irrigation is a specialty. We use precision head types that deliver coverage in tight spaces without waste." },
          { q: "My mature oak trees take up most of the yard. Can I still have turf irrigation?", a: "Yes, but we'd design the system carefully — drip for the root zone and lower precipitation rates to avoid saturating the clay under heavy canopy." },
        ],
        nearbyLinks: [
          { name: "Tucker", slug: "tucker", countySlug: "dekalb-county" },
          { name: "Stone Mountain", slug: "stone-mountain", countySlug: "dekalb-county" },
          { name: "Dunwoody", slug: "dunwoody", countySlug: "dekalb-county" },
        ],
      },
      {
        name: "Tucker",
        slug: "tucker",
        county: "DeKalb County",
        countySlug: "dekalb-county",
        metaTitle: "Irrigation Installation Tucker GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and sprinkler repair in Tucker, GA. DeKalb County residential irrigation service.",
        h1: "Irrigation Installation & Sprinkler Repair in Tucker, GA",
        intro:
          "Tucker is a DeKalb County community that has experienced significant interest in recent years as buyers discover its relatively affordable prices, strong schools, and proximity to both Decatur and Gwinnett County. The community's housing stock is primarily mid-century to 1980s, and irrigation systems — where they exist — reflect that age.",
        installationCopy:
          "Tucker's mid-size residential lots are well-suited to standard irrigation system design. We see a lot of first-time irrigation installs here from homeowners who have been hand-watering or relying on rainfall and have decided to protect a landscape investment they've made. We design these systems to cover the full property with appropriate separation between turf and ornamental bed zones.",
        repairCopy:
          "Where Tucker properties have existing irrigation systems, they're often from the 1990s or early 2000s and are showing age consistently. Controller failures are particularly common — the transformer-based controllers from that era are at end of life. We can upgrade to a modern smart controller without replacing the rest of the system in most cases.",
        seasonalCopy:
          "Tucker follows DeKalb County's outdoor watering restriction schedule. We factor current restriction status into spring startup programming at every visit.",
        closingCopy:
          "We serve Tucker and the surrounding DeKalb County communities.",
        waterAuthority: "DeKalb County Department of Watershed Management",
        soilContext: "Red clay; relatively flat terrain in most of Tucker's residential areas",
        faqs: [
          { q: "Can I upgrade just my controller without replacing the whole system?", a: "In most cases, yes. A controller upgrade is one of the most cost-effective improvements you can make to an older system — modern smart controllers pay for themselves in water savings." },
        ],
        nearbyLinks: [
          { name: "Decatur", slug: "decatur", countySlug: "dekalb-county" },
          { name: "Stone Mountain", slug: "stone-mountain", countySlug: "dekalb-county" },
          { name: "Lithonia", slug: "lithonia", countySlug: "dekalb-county" },
        ],
      },
      {
        name: "Stone Mountain",
        slug: "stone-mountain",
        county: "DeKalb County",
        countySlug: "dekalb-county",
        metaTitle: "Irrigation Installation Stone Mountain GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Stone Mountain, GA. DeKalb County residential irrigation service near Stone Mountain Park.",
        h1: "Irrigation Installation & Sprinkler Repair in Stone Mountain, GA",
        intro:
          "Stone Mountain's identity is inseparable from the park that shares its name — a community defined by the massive granite monadnock at its center and the established residential neighborhoods that surround it. Properties in Stone Mountain range from modest ranch homes to larger lots in the communities surrounding the park, and irrigation needs vary accordingly.",
        installationCopy:
          "Stone Mountain's proximity to the park means some properties sit on lot configurations shaped by the surrounding parkland and the rocky granite outcrops that are common in the area. Rocky subsoil is something we account for in our trenching plans — in some cases, we route around rocky areas rather than through them, or use surface-run pipe with proper protection.",
        repairCopy:
          "Stone Mountain's established neighborhoods have irrigation systems across a wide age range. We service all of them and approach each with a full diagnostic rather than assuming the problem is at the head level.",
        seasonalCopy:
          "Stone Mountain falls under DeKalb County's outdoor watering restriction schedule, and the area's proximity to the park means landscape health is a community priority. We take our seasonal calibration work seriously in this market.",
        closingCopy:
          "We serve Stone Mountain and the surrounding east DeKalb County communities.",
        waterAuthority: "DeKalb County Department of Watershed Management",
        soilContext: "Red clay with granite rock outcrops requiring careful trenching in some areas",
        faqs: [
          { q: "Can you install irrigation on a property with granite rock just below the surface?", a: "Yes, though it requires route planning. We identify rock locations during our site assessment and design the mainline path to work around rather than through major obstructions." },
        ],
        nearbyLinks: [
          { name: "Tucker", slug: "tucker", countySlug: "dekalb-county" },
          { name: "Lithonia", slug: "lithonia", countySlug: "dekalb-county" },
          { name: "Conyers", slug: "conyers", countySlug: "rockdale-county" },
        ],
      },
      {
        name: "Lithonia",
        slug: "lithonia",
        county: "DeKalb County",
        countySlug: "dekalb-county",
        metaTitle: "Irrigation Installation Lithonia GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Lithonia, GA. East DeKalb County irrigation service for residential properties.",
        h1: "Irrigation Installation & Service in Lithonia, GA",
        intro:
          "Lithonia sits in eastern DeKalb County at the edge of the metro's suburban development, where the density of the closer-in suburbs gives way to somewhat larger lots and a more transitional character. It's a community that straddles the line between established suburb and emerging growth area, and irrigation demand reflects both of those realities.",
        installationCopy:
          "Lithonia's residential lots tend toward the mid-size range — enough space for a properly designed 5–7 zone system that covers turf and ornamental beds without waste. We see strong demand here from homeowners who have been hand-watering and are ready for a permanent solution.",
        repairCopy:
          "Lithonia repair calls frequently involve systems that were installed by the homeowner or a handyman without professional design or proper permitting. We assess these systems from the ground up and give honest guidance on what it will take to get them performing correctly.",
        seasonalCopy:
          "Eastern DeKalb County can experience slightly more precipitation than the western parts of the county due to its position relative to storm tracks from the east. We factor local precipitation patterns into our runtime programming recommendations.",
        closingCopy:
          "We serve Lithonia and the surrounding east DeKalb County communities.",
        waterAuthority: "DeKalb County Department of Watershed Management",
        soilContext: "Red clay transitioning toward rockier substrate near the Rockdale County line",
        faqs: [
          { q: "Do you service properties that border Rockdale County?", a: "Yes — we serve east DeKalb and the communities near the DeKalb/Rockdale line." },
        ],
        nearbyLinks: [
          { name: "Stone Mountain", slug: "stone-mountain", countySlug: "dekalb-county" },
          { name: "Conyers", slug: "conyers", countySlug: "rockdale-county" },
          { name: "Tucker", slug: "tucker", countySlug: "dekalb-county" },
        ],
      },
      {
        name: "Dunwoody",
        slug: "dunwoody",
        county: "DeKalb County",
        countySlug: "dekalb-county",
        metaTitle: "Irrigation Installation Dunwoody GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and sprinkler repair in Dunwoody, GA. North DeKalb County's premier residential community served professionally.",
        h1: "Irrigation Installation & Sprinkler Repair in Dunwoody, GA",
        intro:
          "Dunwoody is one of north metro Atlanta's most established and well-maintained communities — a city where landscape quality is a genuine community value and irrigation systems are a standard feature rather than a luxury. Properties here tend to be well-maintained, owners are engaged, and expectations for service quality are high.",
        installationCopy:
          "Dunwoody installation work is primarily on established residential properties that are upgrading from older systems or installing for the first time after a significant landscape renovation. We design precise systems with smart controllers as standard — Dunwoody homeowners appreciate the efficiency and remote management that a Rachio or Hunter Hydrawise controller provides.",
        repairCopy:
          "Dunwoody's established residential base has a large inventory of systems from the 1990s and 2000s that require regular professional maintenance. We service all major brands and keep current on parts availability for older systems that are otherwise sound.",
        seasonalCopy:
          "Dunwoody falls under DeKalb County's water authority jurisdiction. We stay current on seasonal restrictions and program every system we service to comply.",
        closingCopy:
          "We serve Dunwoody and the surrounding north DeKalb communities.",
        waterAuthority: "DeKalb County Department of Watershed Management",
        soilContext: "Red clay with some rocky substrate near the Chattahoochee corridor",
        faqs: [
          { q: "Do you install smart irrigation controllers as standard?", a: "Yes. We recommend and install Rachio, Hunter Hydrawise, and Rain Bird smart controllers on all new installations. They pay for themselves in water savings." },
        ],
        nearbyLinks: [
          { name: "Sandy Springs", slug: "sandy-springs", countySlug: "fulton-county" },
          { name: "Tucker", slug: "tucker", countySlug: "dekalb-county" },
          { name: "Decatur", slug: "decatur", countySlug: "dekalb-county" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // GWINNETT COUNTY
  // ─────────────────────────────────────────
  {
    name: "Gwinnett County",
    slug: "gwinnett-county",
    metaTitle: "Irrigation Company Gwinnett County GA | Atlanta Irrigation",
    metaDescription: "Irrigation installation and sprinkler repair across Gwinnett County, GA. Serving Lawrenceville, Duluth, Buford, Snellville, and Lilburn.",
    h1: "Irrigation Services in Gwinnett County, GA",
    intro:
      "Gwinnett County is metro Atlanta's largest suburban county by population — a massive, diverse market with a residential base spanning from Duluth's established executive communities to the dense new construction corridors of Buford and Lawrenceville. Irrigation is a standard feature in Gwinnett's higher-end residential communities, and demand for professional installation and service is consistent throughout the county.",
    cities: [
      {
        name: "Lawrenceville",
        slug: "lawrenceville",
        county: "Gwinnett County",
        countySlug: "gwinnett-county",
        metaTitle: "Irrigation Company Lawrenceville GA | Installation & Sprinkler Repair",
        metaDescription: "Irrigation installation and sprinkler repair in Lawrenceville, GA. Gwinnett County's seat served with professional irrigation expertise.",
        h1: "Irrigation Installation & Sprinkler Repair in Lawrenceville, GA",
        intro:
          "Lawrenceville is Gwinnett County's seat and one of its most active development markets. The city has absorbed wave after wave of residential growth and now anchors a dense suburban corridor that extends in every direction. Irrigation systems here span every age and quality level, and we approach each property on its own terms.",
        installationCopy:
          "New irrigation installation in Lawrenceville is driven by both new construction and by homeowners upgrading properties that never had irrigation. We design systems for Gwinnett's red clay soil — conservative precipitation rates, cycle-and-soak programming where necessary, and smart controllers that adjust automatically to weather conditions.",
        repairCopy:
          "Lawrenceville has a large inventory of systems from the 1990s and 2000s that are in their active repair phase. We carry parts for all major brands and run efficient service routes through Gwinnett County.",
        seasonalCopy:
          "Gwinnett County Department of Water Resources implements outdoor watering restrictions during drought conditions. We stay current on restriction status and program accordingly at every spring startup visit.",
        closingCopy:
          "We serve Lawrenceville and the surrounding Gwinnett County communities.",
        waterAuthority: "Gwinnett County Department of Water Resources",
        soilContext: "Red clay; grade variation increases in areas near Lake Lanier drainage",
        faqs: [
          { q: "Do you cover all of Gwinnett County from Lawrenceville?", a: "Yes — we serve all five major Gwinnett cities and the surrounding unincorporated communities." },
        ],
        nearbyLinks: [
          { name: "Duluth", slug: "duluth", countySlug: "gwinnett-county" },
          { name: "Snellville", slug: "snellville", countySlug: "gwinnett-county" },
          { name: "Buford", slug: "buford", countySlug: "gwinnett-county" },
        ],
      },
      {
        name: "Duluth",
        slug: "duluth",
        county: "Gwinnett County",
        countySlug: "gwinnett-county",
        metaTitle: "Irrigation Installation Duluth GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and sprinkler repair in Duluth, GA. North Gwinnett County's executive communities served professionally.",
        h1: "Irrigation Installation & Sprinkler Repair in Duluth, GA",
        intro:
          "Duluth is one of Gwinnett County's most established and affluent communities — a city with executive-level homes, significant commercial development, and a residential base that has consistently invested in landscape quality. Irrigation is the rule rather than the exception in Duluth's premier neighborhoods, and service expectations are high.",
        installationCopy:
          "Duluth installation work is often on larger properties with complex zone requirements — separate programs for turf, ornamental beds, specimen plantings, and in some cases water features. We design these multi-zone systems with the same precision we apply everywhere, and we default to smart controller installation on every Duluth project.",
        repairCopy:
          "Duluth's established communities have irrigation systems of varying ages and quality. Premium communities often have commercial-grade systems that require expertise beyond what a standard residential irrigation company provides. We service these systems professionally.",
        seasonalCopy:
          "Duluth follows Gwinnett County's outdoor watering restriction schedule. Given the landscape investment common in Duluth's premier neighborhoods, proper seasonal service is essential to protecting that investment year over year.",
        closingCopy:
          "We serve Duluth including the communities along Peachtree Industrial Boulevard and the residential corridors throughout the city.",
        waterAuthority: "Gwinnett County Department of Water Resources",
        soilContext: "Red clay; significant property size variation between neighborhoods",
        faqs: [
          { q: "Do you service HOA common areas in Duluth communities?", a: "We focus on single-family residential properties. For HOA common area irrigation, reach out and we can discuss whether the scope fits our service model." },
        ],
        nearbyLinks: [
          { name: "Lawrenceville", slug: "lawrenceville", countySlug: "gwinnett-county" },
          { name: "Buford", slug: "buford", countySlug: "gwinnett-county" },
          { name: "Dunwoody", slug: "dunwoody", countySlug: "dekalb-county" },
        ],
      },
      {
        name: "Buford",
        slug: "buford",
        county: "Gwinnett County",
        countySlug: "gwinnett-county",
        metaTitle: "Irrigation Installation Buford GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Buford, GA. North Gwinnett County and Lake Lanier area irrigation service.",
        h1: "Irrigation Installation & Sprinkler Repair in Buford, GA",
        intro:
          "Buford sits at the northern edge of Gwinnett County near Lake Lanier, and its character is shaped by that proximity — lakefront properties, marina communities, and the kind of outdoor lifestyle that treats landscape quality as a priority. Buford has also absorbed significant new construction in recent years along the Mall of Georgia corridor and Highway 20.",
        installationCopy:
          "Buford's lakefront and lake-view properties require the same careful erosion management and runoff control that we apply to our Acworth lake properties in Cobb County. We design systems on these properties to prevent irrigation water from reaching the lake — using reduced precipitation rates, smart shutoff before rain events, and precise zone boundaries at the property's waterside edge.",
        repairCopy:
          "In Buford's newer Mall of Georgia corridor subdivisions, repair calls most often involve builder-grade systems that were installed to cost rather than quality. We assess these systems and give homeowners a realistic picture of what it takes to bring them to proper performance.",
        seasonalCopy:
          "Buford's northern Gwinnett position means slightly earlier frost dates than southern Gwinnett communities. We adjust fall shutdown timing accordingly.",
        closingCopy:
          "We serve Buford and the surrounding north Gwinnett communities including the Lake Lanier area.",
        waterAuthority: "City of Buford Water / Gwinnett County Department of Water Resources",
        soilContext: "Red clay; grade variation significant on lake-adjacent properties",
        faqs: [
          { q: "Do you service lake-adjacent properties in Buford?", a: "Yes — lakefront irrigation is something we design and service regularly, with specific attention to erosion control and runoff prevention." },
        ],
        nearbyLinks: [
          { name: "Duluth", slug: "duluth", countySlug: "gwinnett-county" },
          { name: "Lawrenceville", slug: "lawrenceville", countySlug: "gwinnett-county" },
        ],
      },
      {
        name: "Snellville",
        slug: "snellville",
        county: "Gwinnett County",
        countySlug: "gwinnett-county",
        metaTitle: "Irrigation Installation Snellville GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Snellville, GA. East Gwinnett County residential irrigation service.",
        h1: "Irrigation Installation & Sprinkler Repair in Snellville, GA",
        intro:
          "Snellville is one of Gwinnett County's most established communities — a city that grew rapidly in the 1980s and 1990s and has maintained a strong residential character since. Its housing stock is primarily from that era, which means a large portion of existing irrigation systems are entering or have entered their active repair phase.",
        installationCopy:
          "New installation in Snellville is most common on properties that never had irrigation or on homes that have been significantly renovated and need a fresh system. We design for Snellville's established landscape character — many properties have mature trees and ornamental plantings that require careful zone separation.",
        repairCopy:
          "Snellville's 1980s and 1990s irrigation systems are where the majority of our east Gwinnett repair work originates. We're efficient at diagnosing and repairing the components common in systems from that era, and we're honest about when repair reaches the point of diminishing return compared to a targeted replacement.",
        seasonalCopy:
          "Snellville follows Gwinnett County's outdoor watering restriction schedule. East Gwinnett can receive slightly more rainfall than western portions of the county — we factor local precipitation patterns into our runtime calibration.",
        closingCopy:
          "We serve Snellville and the surrounding east Gwinnett County communities.",
        waterAuthority: "Gwinnett County Department of Water Resources",
        soilContext: "Red clay; rolling terrain common in east Gwinnett",
        faqs: [
          { q: "My system is from the late 1980s. Is it worth repairing?", a: "Systems from that era can still be in serviceable condition depending on pipe material and component quality. We'll give you an honest assessment of where it stands." },
        ],
        nearbyLinks: [
          { name: "Lawrenceville", slug: "lawrenceville", countySlug: "gwinnett-county" },
          { name: "Lilburn", slug: "lilburn", countySlug: "gwinnett-county" },
          { name: "Stone Mountain", slug: "stone-mountain", countySlug: "dekalb-county" },
        ],
      },
      {
        name: "Lilburn",
        slug: "lilburn",
        county: "Gwinnett County",
        countySlug: "gwinnett-county",
        metaTitle: "Irrigation Installation Lilburn GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Lilburn, GA. West Gwinnett County residential irrigation service.",
        h1: "Irrigation Installation & Sprinkler Repair in Lilburn, GA",
        intro:
          "Lilburn sits at the western edge of Gwinnett County, bordering DeKalb, and its character reflects that position — an established community with a diverse residential base, strong neighborhood associations, and homeowners who invest in their properties. It's a market where irrigation quality matters and where professional service is noticed.",
        installationCopy:
          "Lilburn installs are primarily on established residential lots with existing mature landscaping. We design around what's there — routing mainlines away from established root systems and selecting head types appropriate to the property's specific mix of turf, shade, and ornamental areas.",
        repairCopy:
          "Lilburn's established housing stock means we frequently encounter mid-age and older irrigation systems that need professional attention. We diagnose methodically and repair efficiently.",
        seasonalCopy:
          "Lilburn's position on the Gwinnett/DeKalb county line means it can be subject to either county's water authority restrictions depending on the specific address. We verify jurisdiction at the start of each service relationship.",
        closingCopy:
          "We serve Lilburn and the surrounding west Gwinnett and east DeKalb communities.",
        waterAuthority: "Gwinnett County Department of Water Resources / DeKalb County",
        soilContext: "Red clay; rolling terrain with some grade variation",
        faqs: [
          { q: "I'm on the Gwinnett/DeKalb county line. Does that affect my service?", a: "It doesn't affect our service — we cover both sides. It does affect which water authority's restrictions apply, which we'll verify when we visit." },
        ],
        nearbyLinks: [
          { name: "Snellville", slug: "snellville", countySlug: "gwinnett-county" },
          { name: "Tucker", slug: "tucker", countySlug: "dekalb-county" },
          { name: "Lawrenceville", slug: "lawrenceville", countySlug: "gwinnett-county" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // NEWTON COUNTY
  // ─────────────────────────────────────────
  {
    name: "Newton County",
    slug: "newton-county",
    metaTitle: "Irrigation Company Newton County GA | Atlanta Irrigation",
    metaDescription: "Irrigation installation and sprinkler repair across Newton County, GA. Serving Covington, Oxford, and Mansfield.",
    h1: "Irrigation Services in Newton County, GA",
    intro:
      "Newton County sits east of metro Atlanta's suburban core — a county with a strong historical identity anchored by Covington, a growing residential base driven by I-20 corridor development, and rural communities that have maintained their character despite the surrounding growth. Irrigation in Newton County spans established historic properties in Covington to newer subdivisions and rural acreage throughout the county.",
    cities: [
      {
        name: "Covington",
        slug: "covington",
        county: "Newton County",
        countySlug: "newton-county",
        metaTitle: "Irrigation Company Covington GA | Installation & Sprinkler Repair",
        metaDescription: "Irrigation installation and sprinkler repair in Covington, GA. Newton County's historic city served with professional irrigation expertise.",
        h1: "Irrigation Installation & Sprinkler Repair in Covington, GA",
        intro:
          "Covington is one of the most filmed cities in the country — its well-preserved antebellum square and surrounding historic neighborhoods have served as backdrops for dozens of productions. That aesthetic character reflects real investment in the built environment, and the properties in historic Covington take landscape quality seriously. We bring the appropriate level of care to irrigation work in this market.",
        installationCopy:
          "Historic Covington properties require the same thoughtful approach to irrigation installation that we apply in Senoia and Jonesboro — careful root avoidance, drip irrigation in established ornamental areas, and hand-digging near mature trees and period-appropriate foundation plantings. In Covington's newer subdivisions along the I-20 corridor, installation is more straightforward, and we work efficiently to get systems established alongside new sod.",
        repairCopy:
          "Covington's established properties frequently have irrigation systems that haven't seen professional service in years. We audit these systems thoroughly before recommending any work and give homeowners a clear, honest picture of the system's actual condition.",
        seasonalCopy:
          "Newton County falls under Georgia's statewide outdoor watering schedule. Covington's position east of the metro means it can receive slightly different precipitation patterns than the west side — we factor local climate data into our runtime calibration.",
        closingCopy:
          "We serve Covington and the surrounding Newton County communities.",
        waterAuthority: "City of Covington Water / Newton County Water",
        soilContext: "Red clay; established mature vegetation in historic areas",
        faqs: [
          { q: "Do you serve the historic square area of Covington?", a: "Yes — we serve residential and light commercial properties throughout Covington including the historic district." },
        ],
        nearbyLinks: [
          { name: "Oxford", slug: "oxford", countySlug: "newton-county" },
          { name: "Conyers", slug: "conyers", countySlug: "rockdale-county" },
          { name: "Lithonia", slug: "lithonia", countySlug: "dekalb-county" },
        ],
      },
      {
        name: "Oxford",
        slug: "oxford",
        county: "Newton County",
        countySlug: "newton-county",
        metaTitle: "Irrigation Installation Oxford GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Oxford, GA. Newton County residential irrigation service near Oxford College.",
        h1: "Irrigation Installation & Service in Oxford, GA",
        intro:
          "Oxford is a small Newton County city anchored by Oxford College of Emory University — a campus community with established residential neighborhoods and a character defined by the college's long history. Properties here tend toward the well-maintained, and the irrigation market is one where professional quality is appreciated.",
        installationCopy:
          "Oxford residential installs are primarily on mid-size lots in established neighborhoods. We design systems that match the property's existing landscape character — precise coverage, appropriate head selection for shade vs. sun areas, and smart controller installation as standard.",
        repairCopy:
          "Oxford's established housing stock means repair is a regular part of our Newton County service. We diagnose accurately and repair efficiently, with most calls resolved in a single visit.",
        seasonalCopy:
          "Oxford follows Newton County's seasonal service windows. Spring startup is typically mid-March and fall shutdown before the first hard freeze.",
        closingCopy:
          "We serve Oxford and the surrounding Newton County communities.",
        waterAuthority: "City of Oxford Water",
        soilContext: "Red clay; established campus-adjacent neighborhoods with mature tree canopy",
        faqs: [
          { q: "Do you service properties near Oxford College?", a: "Yes — we serve residential properties throughout Oxford." },
        ],
        nearbyLinks: [
          { name: "Covington", slug: "covington", countySlug: "newton-county" },
          { name: "Conyers", slug: "conyers", countySlug: "rockdale-county" },
        ],
      },
      {
        name: "Mansfield",
        slug: "mansfield",
        county: "Newton County",
        countySlug: "newton-county",
        metaTitle: "Irrigation Installation Mansfield GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Mansfield, GA. Rural Newton County irrigation service for residential and acreage properties.",
        h1: "Irrigation Installation & Service in Mansfield, GA",
        intro:
          "Mansfield is a quiet rural community in eastern Newton County where larger properties and a more agricultural character define the landscape. Irrigation work here is primarily on residential acreage — homeowners who want reliable water delivery for lawns, gardens, and ornamental areas without the daily involvement that hand-watering requires.",
        installationCopy:
          "Mansfield installs on acreage properties follow our rural design process — well capacity assessment first, zone layout designed to what the source can sustain, mainline sized for the longer runs that larger lots require.",
        repairCopy:
          "Rural Mansfield properties often haven't had professional irrigation service in years. We conduct full system audits on these properties and give clear, honest assessments before recommending any work.",
        seasonalCopy:
          "Mansfield's eastern Newton County location means it can experience weather patterns slightly different from the Atlanta metro core. We calibrate seasonal service to local conditions.",
        closingCopy:
          "We serve Mansfield and the surrounding rural Newton County area.",
        waterAuthority: "Private well (most properties) / Newton County Water",
        soilContext: "Sandy clay loam; larger rural lots",
        faqs: [
          { q: "Do you serve rural properties in eastern Newton County?", a: "Yes — we cover rural Newton County including the areas around Mansfield and toward the Morgan County line." },
        ],
        nearbyLinks: [
          { name: "Covington", slug: "covington", countySlug: "newton-county" },
          { name: "Oxford", slug: "oxford", countySlug: "newton-county" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // ROCKDALE COUNTY
  // ─────────────────────────────────────────
  {
    name: "Rockdale County",
    slug: "rockdale-county",
    metaTitle: "Irrigation Company Rockdale County GA | Atlanta Irrigation",
    metaDescription: "Irrigation installation and sprinkler repair across Rockdale County, GA. Serving Conyers and surrounding communities.",
    h1: "Irrigation Services in Rockdale County, GA",
    intro:
      "Rockdale County is one of Georgia's smaller counties by area, but its residential density — anchored by Conyers — makes it a meaningful irrigation market. The county sits at the intersection of the DeKalb, Henry, and Newton County corridors, and its properties reflect the same red clay soil challenges common throughout the east metro corridor.",
    cities: [
      {
        name: "Conyers",
        slug: "conyers",
        county: "Rockdale County",
        countySlug: "rockdale-county",
        metaTitle: "Irrigation Company Conyers GA | Installation & Sprinkler Repair",
        metaDescription: "Irrigation installation and sprinkler repair in Conyers, GA. Rockdale County's largest city served with professional irrigation expertise.",
        h1: "Irrigation Installation & Sprinkler Repair in Conyers, GA",
        intro:
          "Conyers is Rockdale County's seat and commercial center — a city with an established residential base, strong equestrian culture in the surrounding areas, and homeowners who take their properties seriously. The Georgia International Horse Park's presence in Conyers speaks to the community's commitment to outdoor quality, and that ethic extends to residential landscape care.",
        installationCopy:
          "Conyers residential installations span a range of property types — from established neighborhoods near the historic courthouse square to newer subdivisions along the Highway 138 corridor and the larger rural properties that surround the city. We design for each context. Urban and suburban lots get precision residential systems. Larger rural properties get the same well-capacity-first design approach we apply in Brooks and Turin.",
        repairCopy:
          "Conyers has a significant inventory of systems from the 1990s and early 2000s that are in their active repair phase. We service all brands and run regular routes through Rockdale County.",
        seasonalCopy:
          "Conyers and Rockdale County fall under Georgia's statewide outdoor watering schedule, with Rockdale County Water Resources implementing additional restrictions during drought years. We stay current on those and program accordingly.",
        closingCopy:
          "We serve all of Conyers and the surrounding Rockdale County communities.",
        waterAuthority: "Rockdale County Water Resources",
        soilContext: "Red clay; some rocky granite substrate in areas near the Arabia Mountain corridor",
        faqs: [
          { q: "Do you serve properties near the Georgia International Horse Park?", a: "Yes — we serve all of Conyers and the surrounding Rockdale County area." },
          { q: "Can you design irrigation for a property with horses?", a: "For residential landscape irrigation yes. Equestrian-specific water delivery systems are a different specialty — we focus on landscape irrigation." },
        ],
        nearbyLinks: [
          { name: "Covington", slug: "covington", countySlug: "newton-county" },
          { name: "Stone Mountain", slug: "stone-mountain", countySlug: "dekalb-county" },
          { name: "Lithonia", slug: "lithonia", countySlug: "dekalb-county" },
        ],
      },
      {
        name: "Milstead",
        slug: "milstead",
        county: "Rockdale County",
        countySlug: "rockdale-county",
        metaTitle: "Irrigation Installation Milstead GA | Atlanta Irrigation",
        metaDescription: "Irrigation installation and repair in Milstead, GA. Rural Rockdale County irrigation service.",
        h1: "Irrigation Installation & Service in Milstead, GA",
        intro:
          "Milstead is a small historic community in Rockdale County — a former mill town with an authentic character and residential properties that reflect the area's long history. Irrigation here is often on established properties that haven't had professional service, and we approach each one with a thorough assessment before recommending any work.",
        installationCopy:
          "Milstead's residential properties tend toward the larger side by Rockdale County standards. We design installations that cover the full property efficiently and program conservatively for the red clay soil that characterizes the area.",
        repairCopy:
          "Milstead repair calls are sometimes the first professional service a property has had. We conduct complete system audits and give honest recommendations.",
        seasonalCopy:
          "Milstead follows Rockdale County's seasonal service windows. Spring startup and fall shutdown are timed to actual forecast conditions.",
        closingCopy:
          "We serve Milstead and the surrounding rural Rockdale County communities.",
        waterAuthority: "Rockdale County Water Resources",
        soilContext: "Red clay; some variation near the Yellow River drainage",
        faqs: [
          { q: "Do you serve the rural Rockdale County areas surrounding Milstead?", a: "Yes — we cover rural Rockdale County and the communities near the Rockdale/Newton and Rockdale/Henry county lines." },
        ],
        nearbyLinks: [
          { name: "Conyers", slug: "conyers", countySlug: "rockdale-county" },
          { name: "Covington", slug: "covington", countySlug: "newton-county" },
        ],
      },
    ],
  },
];

export function getCounty(slug: string): CountyData | undefined {
  return counties.find((c) => c.slug === slug);
}

export function getCity(countySlug: string, citySlug: string): CityData | undefined {
  const county = getCounty(countySlug);
  return county?.cities.find((c) => c.slug === citySlug);
}

export function getAllCities(): CityData[] {
  return counties.flatMap((c) => c.cities);
}
