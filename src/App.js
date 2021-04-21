import React, {useState} from 'react'

// import './App.css';
import Items from './components/Items'
import Basket from './components/Basket'

function App() {
    const [basket, setBasket] = useState([])


    //Burayi calis!!
    // const testFunc = (ilktakim,ikincitakim) => {
    //         if(ilktakim === 'Fenerbahce'){
    //             console.log('Cok kral bir takim tutuyorsun.')
    //         }else {
    //             console.log('Les gibi bir takim tutuyorsun.')
    //         }
    // }

    // // Arrow function tekrar calisilacak.

    // <button onClick={()=>testFunc('fenerbahce','besiktas')}></button>




    const addToCart = (item) => {
        const newBasket = [...basket];
        item.qty = 1
        
        // && bu ve demek || buda veya demek
        if (newBasket.length === 0 || !newBasket.filter(check => check.id === item.id).length > 0) {
            newBasket.push(item);
            setBasket(newBasket);
        } else {
            // Update just quantity + 1
            updateQty(item, 1);
        }
    }



    const updateQty = (item, qty) => {
        // Mevcut sepetteki datayi yeni degiskene atalim
        const newBasket = [...basket];

        //For calisilacak
        for (let i = 0; i< newBasket.length; i++) {
            let siradakiItem = newBasket[i]
            // If item eq. currently item plus or minus
            if (siradakiItem.id === item.id) {
                siradakiItem.qty += qty;
            }
            // If quantity 0 just delete from basket
            // Splice fonksiyonu calisilacak.
            if (siradakiItem.id === item.id && siradakiItem.qty === 0) {
                newBasket.splice(i, 1);
            }
        }
        // En son yeni basketimizi set ediyoruz, Tamamen guncelliyoruz.
        setBasket(newBasket);
    }


    return (
        <>
            <Basket addToCart={addToCart} updateQty={updateQty} basket={basket} setBasket={setBasket}/>
            <Items addToCart={addToCart} updateQty={updateQty} basket={basket} setBasket={setBasket}/>
        </>
    );
}


export default App;
