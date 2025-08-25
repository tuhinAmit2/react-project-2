import {forwardRef, useImperativeHandle, useRef} from 'react';
import {createPortal} from 'react-dom';
import Cart from './Cart';

const CartModal = forwardRef(function Modal({title, actions}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(<dialog id="modal" ref={dialog}>
        <div className="modal-header">
            <div className="modal-content p-3">

                {/* Header */}
                <div className="modal-header d-flex justify-content-between align-items-center">
                    <h5 className="modal-title">{title}</h5>
                    <form method="dialog" className="m-0">
                        <button type="submit" className="btn-close" aria-label="Close"></button>
                    </form>
                </div>

                {/* Body */}
                <div className="modal-body">
                    <Cart/>
                </div>

                {/* Footer */}
                <div className="modal-footer">
                    <form method="dialog" id="modal-actions">
                        {actions}
                    </form>
                </div>

            </div>
        </div>
    </dialog>, document.getElementById('modal'));
});

export default CartModal;
