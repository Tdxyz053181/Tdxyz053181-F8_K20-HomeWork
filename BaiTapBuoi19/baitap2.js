const customers = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
  { id: 4, name: "Bob Brown", email: "bob@example.com" },
  { id: 5, name: "Charlie Green", email: "charlie@example.com" },
];

const products = [
  { id: 101, name: "Laptop", price: 1200 },
  { id: 102, name: "Phone", price: 800 },
  { id: 103, name: "Tablet", price: 500 },
  { id: 104, name: "Smartwatch", price: 300 },
  { id: 105, name: "Headphones", price: 150 },
];

const orders = [
  {
    id: 1001,
    customerId: 1,
    items: [
      { productId: 101, quantity: 2 },
      { productId: 102, quantity: 1 },
    ],
  },
  {
    id: 1002,
    customerId: 2,
    items: [
      { productId: 102, quantity: 1 },
      { productId: 103, quantity: 3 },
    ],
  },
  {
    id: 1003,
    customerId: 3,
    items: [
      { productId: 104, quantity: 5 },
      { productId: 105, quantity: 2 },
    ],
  },
  {
    id: 1004,
    customerId: 4,
    items: [
      { productId: 101, quantity: 1 },
      { productId: 103, quantity: 2 },
    ],
  },
  {
    id: 1005,
    customerId: 5,
    items: [{ productId: 105, quantity: 10 }],
  },
  {
    id: 1006,
    customerId: 1,
    items: [
      { productId: 101, quantity: 1 },
      { productId: 105, quantity: 3 },
    ],
  },
  {
    id: 1007,
    customerId: 2,
    items: [
      { productId: 104, quantity: 2 },
      { productId: 103, quantity: 1 },
    ],
  },
  {
    id: 1008,
    customerId: 3,
    items: [{ productId: 102, quantity: 2 }],
  },
  {
    id: 1009,
    customerId: 4,
    items: [
      { productId: 101, quantity: 1 },
      { productId: 102, quantity: 1 },
    ],
  },
  {
    id: 1010,
    customerId: 5,
    items: [
      { productId: 103, quantity: 4 },
      { productId: 104, quantity: 3 },
    ],
  },
];

function getCustomerStatistics(customers, products, orders) {
    const result = [];

    for (const customer of customers) {
        const customerOrders = orders.filter(function (order) {
            return order.customerId === customer.id;
        });

        let totalSpent = 0;
        const productMap = {};

        for (const order of customerOrders) {
            for (const item of order.items) {
                const product = products.find(function (product) {
                    return product.id === item.productId;
                });

                if (!product) continue;

                const itemTotal = product.price * item.quantity;
                totalSpent += itemTotal;

                if (!productMap[item.productId]) {
                    productMap[item.productId] = {
                        name: product.name,
                        quantity: 0,
                        totalSpent: 0,
                    };
                }

                productMap[item.productId].quantity += item.quantity;
                productMap[item.productId].totalSpent += itemTotal;
            }
        }

        const customerProducts = Object.values(productMap);

        customerProducts.sort(function (a, b) {
            return b.totalSpent - a.totalSpent;
        });

        result.push({
            id: customer.id,
            name: customer.name,
            totalSpent: totalSpent,
            products: customerProducts,
        });
    }

    result.sort(function (a, b) {
        return b.totalSpent - a.totalSpent;
    });

    return result;
}

// Test case 1

console.log(
  getCustomerStatistics(
    [customers[0]],
    products,
    [
      {
        id: 1,
        customerId: 1,
        items: [
          { productId: 101, quantity: 2 },
          { productId: 101, quantity: 3 },
        ],
      },
    ]
  )
);

// Test case 2

console.log(
  getCustomerStatistics(
    [
      {
        id: 10,
        name: "David",
      },
    ],
    products,
    []
  )
);

// Test case 3

console.log(
  getCustomerStatistics(
    [customers[0]],
    products,
    [
      {
        id: 1,
        customerId: 1,
        items: [
          { productId: 101, quantity: 1 },
          { productId: 102, quantity: 2 },
        ],
      },
    ]
  )
);

// Test case 4

console.log(
  getCustomerStatistics(
    [customers[0]],
    products,
    [
      {
        id: 1,
        customerId: 1,
        items: [{ productId: 101, quantity: 1 }],
      },
      {
        id: 2,
        customerId: 1,
        items: [{ productId: 101, quantity: 2 }],
      },
      {
        id: 3,
        customerId: 1,
        items: [{ productId: 101, quantity: 5 }],
      },
    ]
  )
);

// Test case 5

console.log(getCustomerStatistics(customers, products, orders));

// Test case 6

console.log(
  getCustomerStatistics(
    [customers[0]],
    products,
    orders.filter((order) => order.customerId === 1)
  )
);

// Test case 7

console.log(
  getCustomerStatistics(
    [customers[4]],
    products,
    [
      {
        id: 1005,
        customerId: 5,
        items: [{ productId: 105, quantity: 10 }],
      },
    ]
  )
);

// Test case 8

console.log(getCustomerStatistics([], [], []));