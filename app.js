let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".net", ".us", ".io"];

for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let c = 0; c < noun.length; c++) {
      for (let d = 0; d < ext.length; d++) {
        console.log(pronoun[a] + adj[b] + noun[c] + ext[d]);
      }
    }
  }
}
