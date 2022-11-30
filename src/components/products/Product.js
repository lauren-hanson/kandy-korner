

export const Product = ({ productObject }) => {

    // when searched -> display product that was searched w/ only name, imageUrl, price


    return (
        <>
          <section className="product" key={`product--${productObject?.id}`}>

                <img src={productObject?.imageUrl} />
                <header>{productObject?.name}   ${productObject?.price}</header>
                <p>{productObject?.productType?.category}</p>

            </section>
           
            
        </>

    )
}