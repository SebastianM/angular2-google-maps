import {Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {LatLngLiteral} from '../../core/services/google-maps-types';

/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
@Directive({selector: 'agm-polyline-point'})
export class AgmPolylinePoint implements OnChanges {
  /**
   * The latitude position of the point.
   */
  @Input() public latitude: number;

  /**
   * The longitude position of the point;
   */
  @Input() public longitude: number;

  /**
   * This event emitter gets emitted when the position of the point changed.
   */
  @Output() positionChanged: EventEmitter<LatLngLiteral> = new EventEmitter<LatLngLiteral>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): any {
    if (changes['latitude'] || changes['longitude']) {
      const position: LatLngLiteral = <LatLngLiteral>{
        lat: changes['latitude'] ? changes['latitude'].currentValue : null, // before this change it will fail if the there was no change in both latitude and longitude
        lng: changes['longitude'] ? changes['longitude'].currentValue : null // before this change it will fail if the there was no change in both latitude and longitude
      };
      this.positionChanged.emit(position);
    }
  }
}
