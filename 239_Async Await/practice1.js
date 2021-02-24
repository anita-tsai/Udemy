//ASYNC AWAIT

moveplayer(100, 'Left')
  .then(() => moveplayer(400, 'Left'))
  .then(() => moveplayer(10, 'Left'))
  .then(() => moveplayer(330, 'Left'))

async function playerstart() {
  const firstMove = await moveplayer(100, 'Left');//pause
  const second = await moveplayer(400, 'Left');//pause
  await moveplayer(10, 'Right');//pause
  await moveplayer(330, 'Left');//pause
}
