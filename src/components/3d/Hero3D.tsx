import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useTheme } from '@mui/material';

const StarField = (props: any) => {
    const ref = useRef<any>(null);
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color={props.color}
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const Hero3D = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const color = isDark ? '#ffffff' : '#000000'; // White stars in dark mode, black stars in light mode for contrast

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.6 }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <StarField color={color} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
