$(document).ready(function() {
    
$('#countdown_dashboard').countDown({
					targetDate: {
						'day': 		12,
						'month': 	12,
						'year': 	2017,
						'hour': 	23,
						'min': 		59,
						'sec': 		59,	
						'utc':      true,
						},
					omitWeeks: true					
				});               
                             
});