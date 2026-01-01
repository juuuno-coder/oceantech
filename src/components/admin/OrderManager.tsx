'use client';

import React, { useState } from 'react';
import styles from './AdminComponents.module.css';

interface Order {
  id: string;
  user: string;
  item: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Shipped' | 'Cancelled';
  date: string;
  paymentId?: string; // Portone imp_uid
}

const MOCK_ORDERS: Order[] = [
  { id: 'ORD-001', user: 'Kim Min-ji', item: 'R-minu Hard Wax 500g', amount: 32000, status: 'Shipped', date: '2024-05-20', paymentId: 'imp_83921021' },
  { id: 'ORD-002', user: 'Lee Jun-ho', item: 'Lacan Basic Protocol Kit', amount: 154000, status: 'Paid', date: '2024-05-21', paymentId: 'imp_12093120' },
  { id: 'ORD-003', user: 'Park Ji-sung', item: 'R-minu 200g Refill', amount: 18000, status: 'Pending', date: '2024-05-21' },
  { id: 'ORD-004', user: 'Choi Susie', item: 'Lacan Pro Wax Warmer', amount: 89000, status: 'Cancelled', date: '2024-05-19' },
];

export default function OrderManager() {
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [filter, setFilter] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const updateStatus = (id: string, newStatus: Order['status']) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
    if (selectedOrder && selectedOrder.id === id) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const filteredOrders = filter === 'All' ? orders : orders.filter(o => o.status === filter);

  return (
    <div className={styles.componentContainer}>
      <h2 className={styles.title}>Order Management</h2>
      
      <div className={styles.filterBar}>
        {['All', 'Paid', 'Pending', 'Shipped', 'Cancelled'].map(f => (
          <button 
            key={f}
            className={`${styles.filterBtn} ${filter === f ? styles.activeFilter : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Portone ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user}</td>
              <td>{order.item}</td>
              <td>{order.amount.toLocaleString()}원</td>
              <td><span className={styles.code}>{order.paymentId || '-'}</span></td>
              <td>{order.date}</td>
              <td>
                <span className={`${styles.badge} ${styles['badge' + order.status]}`}>
                  {order.status}
                </span>
              </td>
               <td>
                 <div className={styles.actionCell}>
                   <select 
                     className={styles.actionSelect}
                     value={order.status}
                     onChange={(e) => updateStatus(order.id, e.target.value as any)}
                   >
                     <option value="Pending">Pending</option>
                     <option value="Paid">Paid</option>
                     <option value="Shipped">Shipped</option>
                     <option value="Cancelled">Cancelled</option>
                   </select>
                   <button 
                     className={styles.viewBtn} 
                     onClick={() => setSelectedOrder(order)}
                   >
                     View
                   </button>
                 </div>
               </td>
             </tr>
           ))}
         </tbody>
       </table>

       {/* Order Detail Modal */}
       {selectedOrder && (
         <div className={styles.modalOverlay} onClick={() => setSelectedOrder(null)}>
           <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
             <div className={styles.modalHeader}>
               <h3>Order Details: {selectedOrder.id}</h3>
               <button className={styles.closeBtn} onClick={() => setSelectedOrder(null)}>&times;</button>
             </div>
             <div className={styles.modalBody}>
               <div className={styles.infoGrid}>
                 <div className={styles.infoItem}>
                   <label>Customer</label>
                   <p>{selectedOrder.user}</p>
                 </div>
                 <div className={styles.infoItem}>
                   <label>Date</label>
                   <p>{selectedOrder.date}</p>
                 </div>
                 <div className={styles.infoItem}>
                   <label>Payment ID (imp_uid)</label>
                   <p className={styles.code}>{selectedOrder.paymentId || 'N/A'}</p>
                 </div>
                 <div className={styles.infoItem}>
                   <label>Status</label>
                   <p><span className={`${styles.badge} ${styles['badge' + selectedOrder.status]}`}>{selectedOrder.status}</span></p>
                 </div>
               </div>
               
               <div className={styles.modalItemsSection}>
                 <h4>Items</h4>
                 <div className={styles.orderItemRow}>
                   <span>{selectedOrder.item}</span>
                   <span>1 x {selectedOrder.amount.toLocaleString()}원</span>
                 </div>
               </div>

               <div className={styles.modalFooter}>
                 <div className={styles.totalAmount}>
                   <span>Total</span>
                   <strong>{selectedOrder.amount.toLocaleString()}원</strong>
                 </div>
                 <div className={styles.modalActions}>
                    <button className={styles.cancelOrderBtn} onClick={() => { updateStatus(selectedOrder.id, 'Cancelled'); setSelectedOrder(null); }}>Cancel Order</button>
                    <button className={styles.confirmBtn} onClick={() => setSelectedOrder(null)}>Confirm</button>
                 </div>
               </div>
             </div>
           </div>
         </div>
       )}
    </div>
  );
}
