const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
//const reversed1 = story.split("").reverse().join("");

const reverseString = (story) => {
    return (story === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString(story);