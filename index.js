/*test push*/

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let redCharacter = document.createElement('img')
// redCharacter.src = 'assets/red-character.gif'
// redCharacter.style.position = 'fixed'
// redCharacter.style.left = '300px'
// redCharacter.style.bottom = '300px'
// document.body.append(redCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '250px'
// pineTree.style.bottom = '400px'
// document.body.append(pineTree)

function newImage(imageURL, left, bottom) {
let obj = document.createElement('img')
obj.src = imageURL
obj.style.position = 'fixed'
obj.style.left = left + 'px'
obj.style.bottom = bottom + 'px'
document.body.append(obj)
}

newImage('assets/pine-tree.png', 900, 400)
newImage('assets/pine-tree.png', 800, 400)
newImage('assets/pine-tree.png', 700, 400)
newImage('assets/pine-tree.png', 600, 400)
newImage('assets/pine-tree.png', 500, 400)
newImage('assets/pine-tree.png', 400, 400)
newImage('assets/pine-tree.png', 875, 250)
newImage('assets/pine-tree.png', 775, 350)
newImage('assets/pine-tree.png', 675, 250)
newImage('assets/pine-tree.png', 525, 300)
newImage('assets/pine-tree.png', 475, 325)
newImage('assets/pine-tree.png', 350, 275)


newImage('assets/green-character.gif', 100, 100)
newImage('assets/boulder.png', 200, 200)
newImage('assets/crate.png', 75, 75)
newImage('assets/pillar.png', 100, 200)
newImage('assets/rock.png', 500, 400)
newImage('assets/shield.png', 150, 250)
newImage('assets/staff.png', 275, 150)
newImage('assets/tree.png', 100, 250)
newImage('assets/red-character.gif', 300, 500)

// let sky = document.createElement('img')
// sky.src = 'assets/sky.png'
// sky.style.position = 'fixed'
// sky.style.top = '0px', '100%'
// sky.style.height = '200px'
// document.doctype.append(sky)
