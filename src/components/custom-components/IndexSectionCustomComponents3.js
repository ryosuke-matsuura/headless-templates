import React from 'react';

export default function IndexSectionCustomComponents3() {
    return (
        <React.Fragment>
            <>
                <style dangerouslySetInnerHTML={{__html: "  .container{    height: 300px;    width: 300px;    position: relative;  }  .image {    position: absolute;    top: 0;    left: 0;    bottom: 0;    right: 0;    opacity: 0;    background-size: cover;    background-position: center center;    animation: image-switch-animation 25s infinite;  }  .src1 {    background-image: url(https://github.com/ohtasoji/sample-app/assets/16428443/bce8cff5-4a9a-429a-b8e3-33ff82b2fc17);  }  .src2 {    background-image: url(https://github.com/ohtasoji/sample-app/assets/16428443/0001f1ef-5c1c-40b3-a310-68182c5485c3);  }  .src3 {    background-image: url(https://github.com/ohtasoji/sample-app/assets/16428443/2c6d06e3-1076-450b-8009-534953605bb7);  }  .src4 {    background-image: url(https://github.com/ohtasoji/sample-app/assets/16428443/389faaf0-cfdb-47c9-93a7-df0876e15682);  }  .src5 {    background-image: url(https://github.com/ohtasoji/sample-app/assets/16428443/653d2463-7c13-46d6-be2a-f39432da262c);  }  .image:nth-of-type(1) {    animation-delay: 0s;  }  .image:nth-of-type(2) {    animation-delay: 5s;  }  .image:nth-of-type(3) {    animation-delay: 10s;  }  .image:nth-of-type(4) {    animation-delay: 15s;  }  .image:nth-of-type(5) {    animation-delay: 20s;  }  @keyframes image-switch-animation {    0%{ opacity: 0;}    5%{ opacity: 1;}    25%{ opacity: 1;}    30%{ opacity: 0;}    100%{ opacity: 0;}  }" }} />


            </>
        </React.Fragment>
    );
}

