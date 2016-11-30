import { Injectable }      from '@angular/core';
import { Http, Headers }   from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DialoguesService {
	constructor(private http:Http){
	}

	getDialogues(id){
        return this.http.get('/api/dialogues/'+id)
            .map(res => res.json());
    }

    getDialogue(id){
        return this.http.get('/api/dialogues/dialogue/'+id)
            .map(res => res.json());
    }

	addDialogue(newDialogue){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/dialogues/newdialogue', JSON.stringify(newDialogue), {headers: headers})
			.map(res => res.json());	
	}

	joinDialogue(dialogueId, updDialogue){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/dialogues/join/'+dialogueId, JSON.stringify(updDialogue), {headers: headers})
            .map(res => res.json());        
	}
}