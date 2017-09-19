function makeDogList(dogObj) {
  var dogArray = []
  for (var dog in dogObj) {
    if (dogObj[dog].length > 0) {
      dogObj[dog].forEach((prefix) => {
        dogArray.push(prefix + " " + dog)
      })
    } else {
      dogArray.push(dog)
    }
  }
  console.log(dogArray);
}

// From dog.ceo API:

const dogObject = {
"affenpinscher": [],
"african": [],
"airedale": [],
"akita": [],
"appenzeller": [],
"basenji": [],
"beagle": [],
"bluetick": [],
"borzoi": [],
"bouvier": [],
"boxer": [],
"brabancon": [],
"briard": [],
"bulldog": [
"boston",
"french"
],
"bullterrier": [
"staffordshire"
],
"cairn": [],
"chihuahua": [],
"chow": [],
"clumber": [],
"collie": [
"border"
],
"coonhound": [],
"corgi": [
"cardigan"
],
"dachshund": [],
"dane": [
"great"
],
"deerhound": [
"scottish"
],
"dhole": [],
"dingo": [],
"doberman": [],
"elkhound": [
"norwegian"
],
"entlebucher": [],
"eskimo": [],
"germanshepherd": [],
"greyhound": [
"italian"
],
"groenendael": [],
"hound": [
"Ibizan",
"afghan",
"basset",
"blood",
"english",
"walker"
],
"husky": [],
"keeshond": [],
"kelpie": [],
"komondor": [],
"kuvasz": [],
"labrador": [],
"leonberg": [],
"lhasa": [],
"malamute": [],
"malinois": [],
"maltese": [],
"mastiff": [
"bull",
"tibetan"
],
"mexicanhairless": [],
"mountain": [
"bernese",
"swiss"
],
"newfoundland": [],
"otterhound": [],
"papillon": [],
"pekinese": [],
"pembroke": [],
"pinscher": [
"miniature"
],
"pointer": [
"german"
],
"pomeranian": [],
"poodle": [
"miniature",
"standard",
"toy"
],
"pug": [],
"pyrenees": [],
"redbone": [],
"retriever": [
"chesapeake",
"curly",
"flatcoated",
"golden"
],
"ridgeback": [
"rhodesian"
],
"rottweiler": [],
"saluki": [],
"samoyed": [],
"schipperke": [],
"schnauzer": [
"giant",
"miniature"
],
"setter": [
"english",
"gordon",
"irish"
],
"sheepdog": [
"english",
"shetland"
],
"shiba": [],
"shihtzu": [],
"spaniel": [
"blenheim",
"brittany",
"cocker",
"irish",
"japanese",
"sussex",
"welsh"
],
"springer": [
"english"
],
"stbernard": [],
"terrier": [
"american",
"australian",
"bedlington",
"border",
"dandie",
"fox",
"irish",
"kerryblue",
"lakeland",
"norfolk",
"norwich",
"patterdale",
"scottish",
"sealyham",
"silky",
"tibetan",
"toy",
"westhighland",
"wheaten",
"yorkshire"
],
"vizsla": [],
"weimaraner": [],
"whippet": [],
"wolfhound": [
"irish"
]
}

makeDogList(dogObject);