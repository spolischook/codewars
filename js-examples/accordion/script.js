let items = document.getElementsByClassName('accordion');

for (let i=0; i < items.length; i++) {
    item = items.item(i);
    item.addEventListener("click", function(ent) {
        this.classList.toggle("active");
        let block = this.nextElementSibling;
        if (block.classList.contains('hidden')) {
            block.classList.remove('hidden');
        } else {
            block.classList.add('hidden');
        }
    });
}
