import React from 'react'
import {SparklineComponent , Inject , SparklineTooltip} from '@syncfusion/ej2-react-charts'

type Props = {
  color: string,
  currentColor: string,
  id: string,
  type: any,
  height: string,
  width: string,
  data : {
    x: number,
    yval: number
  }[]
}

const SparkLine = ({color , currentColor , id , type , height ,width , data}: Props) => {
  return (
    <SparklineComponent
    id={id}
    height={height}
    width={width}
    lineWidth={1}
    valueType="Numeric"
    fill={color}
    border={{ color: currentColor, width: 2 }}
    tooltipSettings={{
      visible: true,
      format: '${x} : data ${yval}',
      trackLineSettings: {
        visible: true,
      },
    }}
    markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
    dataSource={data}
    xName="x"
    yName="yval"
    type={type}
  >
    <Inject services={[SparklineTooltip]} />
  </SparklineComponent>
  )
}

export default SparkLine