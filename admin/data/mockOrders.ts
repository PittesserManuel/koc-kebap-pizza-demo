export type OrderStatus = 'neu' | 'in_zubereitung' | 'fertig' | 'ausgeliefert'

export interface OrderItem {
  name: string
  quantity: number
  price: number
}

export interface Order {
  id: string
  orderNumber: string
  customerName: string
  phone: string
  items: OrderItem[]
  total: number
  status: OrderStatus
  createdAt: Date
  address?: string
  note?: string
}

const today = new Date('2026-03-26')
const makeTime = (hours: number, minutes: number) => {
  const d = new Date(today)
  d.setHours(hours, minutes, 0, 0)
  return d
}

export const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: '#1001',
    customerName: 'Thomas Müller',
    phone: '0664 1234567',
    items: [
      { name: 'Koc Dürüm', quantity: 2, price: 9.90 },
      { name: 'Ayran', quantity: 2, price: 2.50 },
    ],
    total: 24.80,
    status: 'ausgeliefert',
    createdAt: makeTime(11, 15),
    address: 'Hauptstraße 12, 2500 Baden',
  },
  {
    id: '2',
    orderNumber: '#1002',
    customerName: 'Anna Gruber',
    phone: '0699 9876543',
    items: [
      { name: 'Pizza Diavolo', quantity: 1, price: 11.50 },
      { name: 'Pizza Mozzarella', quantity: 1, price: 9.90 },
      { name: 'Cola 0,5l', quantity: 2, price: 2.90 },
    ],
    total: 27.20,
    status: 'ausgeliefert',
    createdAt: makeTime(11, 42),
    address: 'Beethovengasse 5, 2500 Baden',
  },
  {
    id: '3',
    orderNumber: '#1003',
    customerName: 'Michael Bauer',
    phone: '0676 5551234',
    items: [
      { name: 'Kebap-Teller', quantity: 1, price: 12.90 },
      { name: 'Kalb Dürüm', quantity: 1, price: 10.90 },
    ],
    total: 23.80,
    status: 'ausgeliefert',
    createdAt: makeTime(12, 5),
    address: 'Josefsplatz 8, 2500 Baden',
  },
  {
    id: '4',
    orderNumber: '#1004',
    customerName: 'Sophie Wagner',
    phone: '0650 2223344',
    items: [
      { name: 'Falafel Box', quantity: 2, price: 9.90 },
      { name: 'Ayran', quantity: 2, price: 2.50 },
    ],
    total: 24.80,
    status: 'ausgeliefert',
    createdAt: makeTime(12, 30),
    address: 'Helenenstraße 22, 2500 Baden',
  },
  {
    id: '5',
    orderNumber: '#1005',
    customerName: 'Klaus Hofmann',
    phone: '0664 7788990',
    items: [
      { name: 'Wiener Schnitzel', quantity: 1, price: 12.90 },
      { name: 'Grill-Teller', quantity: 1, price: 14.90 },
      { name: 'Cola 0,5l', quantity: 2, price: 2.90 },
    ],
    total: 33.60,
    status: 'ausgeliefert',
    createdAt: makeTime(12, 55),
    address: 'Marchettigasse 3, 2500 Baden',
  },
  {
    id: '6',
    orderNumber: '#1006',
    customerName: 'Lisa Steiner',
    phone: '0699 1112233',
    items: [
      { name: 'Pide Kebap', quantity: 1, price: 10.90 },
      { name: 'Koc Dürüm', quantity: 1, price: 9.90 },
      { name: 'Ayran', quantity: 1, price: 2.50 },
    ],
    total: 23.30,
    status: 'ausgeliefert',
    createdAt: makeTime(13, 18),
    address: 'Kaiser-Franz-Ring 7, 2500 Baden',
  },
  {
    id: '7',
    orderNumber: '#1007',
    customerName: 'Robert Fuchs',
    phone: '0676 3334455',
    items: [
      { name: 'Calzone', quantity: 2, price: 11.90 },
      { name: 'Pizza Hawaii', quantity: 1, price: 10.50 },
    ],
    total: 34.30,
    status: 'ausgeliefert',
    createdAt: makeTime(13, 45),
    address: 'Grillgasse 14, 2500 Baden',
  },
  {
    id: '8',
    orderNumber: '#1008',
    customerName: 'Maria Huber',
    phone: '0650 9988776',
    items: [
      { name: 'Kebap-Teller', quantity: 1, price: 12.90 },
      { name: 'Falafel-Wrap', quantity: 1, price: 8.90 },
      { name: 'Cola 0,5l', quantity: 2, price: 2.90 },
    ],
    total: 27.60,
    status: 'ausgeliefert',
    createdAt: makeTime(14, 10),
    address: 'Radetzkystraße 9, 2500 Baden',
  },
  {
    id: '9',
    orderNumber: '#1009',
    customerName: 'Peter Maier',
    phone: '0664 5566778',
    items: [
      { name: 'Gemischtes Dürüm', quantity: 2, price: 10.50 },
      { name: 'Ayran', quantity: 1, price: 2.50 },
    ],
    total: 23.50,
    status: 'fertig',
    createdAt: makeTime(19, 30),
    address: 'Wassergasse 16, 2500 Baden',
    note: 'Bitte extra scharf',
  },
  {
    id: '10',
    orderNumber: '#1010',
    customerName: 'Julia Schmid',
    phone: '0699 4455667',
    items: [
      { name: 'Pizza Funghi', quantity: 1, price: 10.90 },
      { name: 'Pizza Diavolo', quantity: 1, price: 11.50 },
      { name: 'Cola 0,5l', quantity: 2, price: 2.90 },
    ],
    total: 28.20,
    status: 'in_zubereitung',
    createdAt: makeTime(19, 48),
    address: 'Theresiengasse 4, 2500 Baden',
  },
  {
    id: '11',
    orderNumber: '#1011',
    customerName: 'Andreas Weber',
    phone: '0676 6677889',
    items: [
      { name: 'Kalb-Box', quantity: 1, price: 11.90 },
      { name: 'Koc Dürüm', quantity: 1, price: 9.90 },
      { name: 'Ayran', quantity: 2, price: 2.50 },
    ],
    total: 26.80,
    status: 'in_zubereitung',
    createdAt: makeTime(19, 55),
    address: 'Annagasse 11, 2500 Baden',
  },
  {
    id: '12',
    orderNumber: '#1012',
    customerName: 'Sandra Koch',
    phone: '0650 3344556',
    items: [
      { name: 'Wiener Schnitzel', quantity: 2, price: 12.90 },
      { name: 'Cola 0,5l', quantity: 2, price: 2.90 },
    ],
    total: 31.60,
    status: 'neu',
    createdAt: makeTime(20, 5),
    address: 'Pfarrgasse 2, 2500 Baden',
    note: 'Klingeln bei Koch',
  },
]
