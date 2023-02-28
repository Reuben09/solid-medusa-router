import { useParams } from "@solidjs/router";
import { createEffect, createSignal, For } from 'solid-js'

function SingleProduct (){
    const [productItem, setProductItem] = createSignal();
    const params = useParams();
    const id = params.id;
    
    createEffect(async ()=> {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json()
        console.log(data);
        setProductItem(data);
      })

        return <>
        <div class='py-20 px-4'>
            <p>{productItem()?.title}</p>
            <div class='text-white max-w-6xl mx-auto py-2'>
                <div class='grid md:grid-cols-2 gap-20 grid-cols-1'>
                <div class=''>
                        <div class="relative">
                            <img src={productItem()?.images[0]} alt="no image" />
                            <div class="absolute overflow-x-scroll w-full bottom-0 right-0 p-4 flex flex-nowrap gap-4">
                                <div  class="flex w-full flex-nowrap gap-4 rounded-lg">
                                    <div class="w-16 h-24 flex-none">
                                        <div class="h-full w-full rounded-lg cursor-pointer shadow-lg border overflow-hidden">
                                            <img src={productItem()?.images[2]} alt="" class="h-full w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
         </div>
        </div>
         </div>
        </>
}

export default SingleProduct;