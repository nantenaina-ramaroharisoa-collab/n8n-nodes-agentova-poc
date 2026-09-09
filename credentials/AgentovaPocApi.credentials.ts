import type {
	Icon,
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AgentovaPocApi implements ICredentialType {
	name = 'agentovaPocApi';

	displayName = 'Agentova Poc API';

	icon: Icon = { light: 'file:../nodes/AgentovaPoc/agentovaPoc.svg', dark: 'file:../nodes/AgentovaPoc/agentovaPoc.dark.svg' };

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-agentova-poc?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.agentova.ai/v1',
			url: '/automations',
			qs: { limit: 1 },
		},
	};
}
