import './Wave.css'
const Wave = () => {
    return (
        <div className="w-full h-1/6 absolute bottom-0">
            <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                    <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use href="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
            </svg>
        </div>
    );
}
export default Wave;