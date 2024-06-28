import ReactDom from 'react-dom';

const PostModal = ({children}) => {
    const el = document.getElementById('contentBox');
    return ReactDom.createPortal(children, el);
};

export default PostModal;