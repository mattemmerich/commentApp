function nuName() {
   var name = document.getElementById("nameInput").value
   var textName = document.createTextNode(name)
   var newName = document.createElement("li")
   newName.appendChild(textName)

   var comment = document.getElementById("commentInput").value
   var textComment = document.createTextNode(comment)
   var newComment = document.createElement("li")
   newComment.appendChild(textComment)


   document.getElementById("comments").appendChild(newName)
   document.getElementById("comments").appendChild(newComment)
}

function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
