class BookLibrary{

    addToDb(){
        let name=bk_name.value;
        let author=bk_author.value;
        let price=bk_price.value;
        let copies=bk_copies.value;

        let newbook={
            name,
            author,
            price,
            copies
        }
        localStorage.setItem(name,JSON.stringify(newbook))
        swal("added","book added","success")
        
        
    }
    findBook(){
        let search_name=search_value.value;
        if(search_name in localStorage){
            let book_details=JSON.parse(localStorage.getItem(search_name))
            form.style.display="none"
            s_result.style.display="block"
            book_name.innerHTML=book_details.name
            author_name.innerHTML=book_details.author
            book_price.innerHTML=book_details.price
            book_copies.innerHTML=book_details.copies
        }
        else{
            swal("not found","can't find","error")
        }
    }

}

var book = new BookLibrary()