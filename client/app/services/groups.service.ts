import { Injectable }      from '@angular/core';
import { Http, Headers }   from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GroupsService {
	constructor(private http:Http){
		console.log('task service init..');
	}

    getGroups(id){
        return this.http.get('/api/groups/'+id)
            .map(res => res.json());
    }

    getGroup(id){
        return this.http.get('/api/groups/group/'+id)
            .map(res => res.json());
    }

    addGroup(newGroup){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/groups/newgroup', JSON.stringify(newGroup), {headers: headers})
			.map(res => res.json());	
	}

	deleteGroup(id){
		return this.http.delete('/api/groups/deletegroup/'+id)
			.map(res => res.json());
	}

	setStatus(id, updGroup){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');	
        return this.http.put('/api/groups/status/'+id, JSON.stringify(updGroup), {headers: headers})
            .map(res => res.json());
	}
}