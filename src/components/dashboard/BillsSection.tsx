import React from 'react'

const BillsSection: React.FC = () => {
    
    const bills = [
        {
            bill_id: '1',
            customer_name: 'Ubiquity Tech Inc.',
            customer_email: 'hello@ubiquity.com',
            date_of_bill: '06/05/2021, 2:34 AM'
        }
    ]
    
    return(
        <section className="px-8 py-4 mt-4 bg-white" style={{fontFamily:"'Rubik', sans-serif"}}>
            <div className="flex items-center justify-between">
                <h1 className="text-blue-600 tracking-wide font-bold text-2xl" style={{fontFamily:"'Inconsolata', sans-serif"}}>
                    Bills
                </h1>
                <button className="bg-blue-600 text-white p-2 shadow-md rounded">Generate Bill</button>
            </div>
        </section>
    )
}

export default BillsSection