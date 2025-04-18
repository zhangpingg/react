import FixedOneRow from './fixedOneRow/index.jsx';
import FixedMultipleRow from './fixedMultipleRow/index.jsx';

const Index = () => {
    return (
        <div>
            <p className="fs-14">固定一个列（头部可点击，下面同理）</p>
            <FixedOneRow />

            <p className="fs-14 mt-20">固定多个列（目前支持2个列，后期可以加）</p>
            <FixedMultipleRow />
        </div>
    );
};

export default Index;
