import React from 'react'

export default function ChartRound() {
    return (
        <div className="col-6 pt-2">
            <div><canvas data-bs-chart="{&quot;type&quot;:&quot;doughnut&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;January&quot;,&quot;February&quot;,&quot;March&quot;,&quot;April&quot;,&quot;May&quot;,&quot;June&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Revenue&quot;,&quot;backgroundColor&quot;:[&quot;#ff0000&quot;,&quot;#770000&quot;,&quot;rgba(234,185,14,0.57)&quot;,&quot;#000000&quot;,&quot;#6ef11d&quot;,&quot;#0cefe2&quot;],&quot;borderColor&quot;:[&quot;#ffffff&quot;,&quot;#ffffff&quot;,&quot;#ffffff&quot;,&quot;#ffffff&quot;,&quot;#ffffff&quot;,&quot;#ffffff&quot;],&quot;data&quot;:[&quot;4500&quot;,&quot;5300&quot;,&quot;6250&quot;,&quot;7800&quot;,&quot;9800&quot;,&quot;15000&quot;]}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:true,&quot;legend&quot;:{&quot;display&quot;:false,&quot;position&quot;:&quot;right&quot;,&quot;reverse&quot;:false},&quot;title&quot;:{&quot;display&quot;:false}}}"></canvas></div>
        </div>
    )
}
