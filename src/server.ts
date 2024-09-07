import 'reflect-metadata';
import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { HealthRoute } from '@routes/health.router';
import { ProbeOriginRoute } from '@routes/probeOrigin.route';

// ValidateEnv();

const app = new App([
  new HealthRoute(),
  new ProbeOriginRoute()
]
);

app.listen();
