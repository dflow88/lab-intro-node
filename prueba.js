const array = [2,4,1,2]

console.log(array[2])

let pos = (0)

      if (pos <= array.length-1 && pos >=0) {
        console.log(array[pos])
      } else {
    throw new Error("OutOfBounds")
    }


    let max = Math.max(...array)

    console.log(max)