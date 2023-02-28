import { AiOutlineShoppingCart } from 'solid-icons/ai'
import { A } from "@solidjs/router"

const Header = () => {
    return <div>
          <div class="fixed z-50 bg-white topNav w-full top-0 p-3 md:bg-opacity-0">
            <div class="max-w-6xl relative flex mx-auto flex-col md:flex-row">
                <a href="" class="md:hidden absolute top-1 right-14">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="bottom-1 cursor-pointer relative" />
                        <div class="absolute px-1  bg-red-500 -top-1 -right-1 rounded-full border-2 border-white text-white" id="cart2" style="font-size: 10px"></div>
                    </div>
                </a>
                <div class="absolute h-10 flex justify-center bars items-center w-10 text-white right-1 -top-2 rounded-lg shadow-lg md:hidden cursor-pointer border-2 border-white bg-red-500">
                    <i class="fa fa-bars"></i>
                </div>
                <div class="flex-grow font-bold text-lg">
                <A href="/">
                        <span class="">Noble's Shop</span>
                </A>
                </div>
                <div class="menu hidden md:flex flex-col md:flex-row mt-5 md:mt-0 gap-16">
                    <div class="flex flex-col md:flex-row gap-12 capitalize">
                        <div class="">
                        <A href="/">
                                <span class="text-red-400 font-bold border-b border-red-400">Home</span>
                         </A>
                        </div>
                        <div class="">
                        <A href="/products">
                                <span class="">products</span>
                         </A>
                        </div>

                    </div>
                    <div class="flex gap-12">
                        <a href="#" class="hidden md:block">
                            <div class="relative">
                            <AiOutlineShoppingCart class="text-3xl text-gray-400 bottom-1 cursor-pointer relative"/>
                            {/* <AiOutlineShoppingCart />  class="bottom-1 cursor-pointer relative"/> */}
                                <div v-if="productId.length > 0" class="absolute px-1  bg-red-500 -top-1 -right-1 rounded-full border-2 border-white text-white" id="cart" style="font-size: 10px">6</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
 };
 
 export default Header;