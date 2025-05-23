import React, { useState } from 'react';
import { Switch, Typography } from 'antd';
import cn from 'classnames';

const { Paragraph, Text } = Typography;

const Index = () => {
    const str =
        '如果说人生是一枝“凌寒独自开”的梅，个性就是那默默浮动的暗香，如果说人生是一枝“凌寒独自开”的梅，个性就是那默默浮动的暗香。';
    const [ellipsis, setEllipsis] = useState(true);

    return (
        <div>
            <div className={'e-1'}>{str}</div>
            <div className={cn('e-3 mt-20 mb-30')}>{str}</div>
            <Switch
                checked={ellipsis}
                onChange={() => {
                    setEllipsis(!ellipsis);
                }}
            />
            <Paragraph ellipsis={ellipsis}>{str}</Paragraph>
            <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: '更多' } : false}>{str}</Paragraph>
            <Text
                style={ellipsis ? { width: 200 } : undefined}
                ellipsis={ellipsis ? { tooltip: '我是省略的1' } : false}
            >
                {str}
            </Text>
            <br />
            <Text
                code
                style={ellipsis ? { width: 200 } : undefined}
                ellipsis={ellipsis ? { tooltip: '我是省略的2' } : false}
            >
                {str}
            </Text>
        </div>
    );
};

export default Index;
