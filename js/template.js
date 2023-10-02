function championTemplate ({name, role, attackDamage, abilityPower, armor, magicResistance, health, image}){
  
    const template = `
    <div class="container mx-auto p-8">
    <div class="max-w-md mx-auto">
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="${image}" alt="${name}" class="w-full h-auto" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2 text-center">${name}</h2>
          <p class="text-gray-600 text-center">Role: ${role}</p>
          <div class="mt-4">
            <p class="text-gray-600 text-right">Base Attack Damage: ${attackDamage}</p>
            <p class="text-gray-600 text-right">Base Ability Power: ${abilityPower}</p>
            <p class="text-gray-600 text-right">Armor: ${armor}</p>
            <p class="text-gray-600 text-right">Magic Resistance: ${magicResistance}</p>
            <p class="text-gray-600 text-right">Health: ${health}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    `

    return template
  
   }
  
   export {championTemplate}